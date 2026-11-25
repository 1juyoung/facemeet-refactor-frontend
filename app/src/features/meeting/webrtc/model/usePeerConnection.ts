'use client';

import { useRef, useCallback, useState } from 'react';
import type { Socket } from 'socket.io-client';
import { WebRTCUser } from '@/app/src/entities/meeting';

import { getRtcConfig } from './iceConfig';

type SocketRef = React.MutableRefObject<Socket | null>;
type StreamRef = React.MutableRefObject<MediaStream | null>;

export interface UsePeerConnectionReturn {
  users: WebRTCUser[];
  sendPCRef: React.MutableRefObject<RTCPeerConnection | null>;
  receivePCsRef: React.MutableRefObject<Record<string, RTCPeerConnection>>;
  createSenderPC: (socketRef: SocketRef, localStreamRef: StreamRef) => RTCPeerConnection;
  createSenderOffer: (socketRef: SocketRef, roomId: string) => Promise<void>;
  createReceiverPC: (socketId: string, socketRef: SocketRef) => RTCPeerConnection | undefined;
  createReceiverOffer: (
    pc: RTCPeerConnection,
    socketRef: SocketRef,
    senderSocketId: string,
    roomId: string
  ) => Promise<void>;
  closeReceiverPC: (id: string) => void;
  closeAllPCs: () => void;
  setUsers: React.Dispatch<React.SetStateAction<WebRTCUser[]>>;
}

export function usePeerConnection(): UsePeerConnectionReturn {
  const sendPCRef = useRef<RTCPeerConnection | null>(null);
  const receivePCsRef = useRef<Record<string, RTCPeerConnection>>({});
  const [users, setUsers] = useState<WebRTCUser[]>([]);

  const createSenderPC = useCallback((socketRef: SocketRef, localStreamRef: StreamRef): RTCPeerConnection => {
    const pc = new RTCPeerConnection(getRtcConfig());

    pc.onicecandidate = (e) => {
      if (!e.candidate || !socketRef.current) return;
      socketRef.current.emit('senderCandidate', {
        candidate: e.candidate,
        senderSocketID: socketRef.current.id,
      });
    };

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => {
        pc.addTrack(track, localStreamRef.current!);
      });
    }

    sendPCRef.current = pc;
    return pc;
  }, []);

  const createSenderOffer = useCallback(async (socketRef: SocketRef, roomId: string): Promise<void> => {
    if (!sendPCRef.current || !socketRef.current) return;
    try {
      const sdp = await sendPCRef.current.createOffer();
      await sendPCRef.current.setLocalDescription(new RTCSessionDescription(sdp));
      socketRef.current.emit('senderOffer', {
        sdp,
        senderSocketID: socketRef.current.id,
        roomID: roomId,
      });
    } catch (e) {
      console.error('[Sender] offer 생성 오류:', e);
    }
  }, []);

  const createReceiverPC = useCallback((socketId: string, socketRef: SocketRef): RTCPeerConnection | undefined => {
    try {
      const pc = new RTCPeerConnection(getRtcConfig());
      receivePCsRef.current = { ...receivePCsRef.current, [socketId]: pc };

      pc.onicecandidate = (e) => {
        if (!e.candidate || !socketRef.current) return;
        socketRef.current.emit('receiverCandidate', {
          candidate: e.candidate,
          receiverSocketID: socketRef.current.id,
          senderSocketID: socketId,
        });
      };

      // 오디오·비디오 트랙이 따로 도착하므로 한 스트림으로 모은다 (streams가 비어 오는 브라우저 대비)
      let remoteStream: MediaStream | null = null;
      pc.ontrack = (e) => {
        if (e.streams[0]) remoteStream = e.streams[0];
        else {
          remoteStream = remoteStream ?? new MediaStream();
          remoteStream.addTrack(e.track);
        }
        const stream = remoteStream;
        setUsers((prev) => prev.filter((u) => u.id !== socketId).concat({ id: socketId, stream }));
      };

      return pc;
    } catch (e) {
      console.error('[Receiver] PC 생성 오류:', e);
      return undefined;
    }
  }, []);

  const createReceiverOffer = useCallback(
    async (pc: RTCPeerConnection, socketRef: SocketRef, senderSocketId: string, roomId: string): Promise<void> => {
      try {
        // 받기 전용 트랜시버를 명시적으로 추가 (레거시 offerToReceive* 옵션은 일부 모바일 브라우저에서 미지원)
        pc.addTransceiver('audio', { direction: 'recvonly' });
        pc.addTransceiver('video', { direction: 'recvonly' });
        const sdp = await pc.createOffer();
        await pc.setLocalDescription(new RTCSessionDescription(sdp));
        if (!socketRef.current) return;
        socketRef.current.emit('receiverOffer', {
          sdp,
          receiverSocketID: socketRef.current.id,
          senderSocketID: senderSocketId,
          roomID: roomId,
        });
      } catch (e) {
        console.error('[Receiver] offer 생성 오류:', e);
      }
    },
    []
  );

  const closeReceiverPC = useCallback((id: string) => {
    if (!receivePCsRef.current[id]) return;
    receivePCsRef.current[id].close();
    delete receivePCsRef.current[id];
  }, []);

  const closeAllPCs = useCallback(() => {
    sendPCRef.current?.close();
    sendPCRef.current = null;
    Object.values(receivePCsRef.current).forEach((pc) => pc.close());
    receivePCsRef.current = {};
  }, []);

  return {
    users,
    sendPCRef,
    receivePCsRef,
    createSenderPC,
    createSenderOffer,
    createReceiverPC,
    createReceiverOffer,
    closeReceiverPC,
    closeAllPCs,
    setUsers,
  };
}
