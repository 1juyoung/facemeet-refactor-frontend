'use client';

import { useRef, useCallback, useState } from 'react';
import type { Socket } from 'socket.io-client';
import { WebRTCUser } from '@/app/src/entities/meeting';

const PC_CONFIG: RTCConfiguration = {
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
};

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
    const pc = new RTCPeerConnection(PC_CONFIG);

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
      const sdp = await sendPCRef.current.createOffer({
        offerToReceiveAudio: false,
        offerToReceiveVideo: false,
      });
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
      const pc = new RTCPeerConnection(PC_CONFIG);
      receivePCsRef.current = { ...receivePCsRef.current, [socketId]: pc };

      pc.onicecandidate = (e) => {
        if (!e.candidate || !socketRef.current) return;
        socketRef.current.emit('receiverCandidate', {
          candidate: e.candidate,
          receiverSocketID: socketRef.current.id,
          senderSocketID: socketId,
        });
      };

      pc.ontrack = (e) => {
        setUsers((prev) =>
          prev.filter((u) => u.id !== socketId).concat({ id: socketId, stream: e.streams[0] })
        );
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
        const sdp = await pc.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
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
