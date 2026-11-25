'use client';

import React, { useEffect, useCallback } from 'react';
import { useMediaStream } from '../features/meeting/webrtc/model/useMediaStream';
import { usePeerConnection } from '../features/meeting/webrtc/model/usePeerConnection';
import { useSocketSignaling } from '../features/meeting/webrtc/model/useSocketSignaling';
import { VideoGrid } from '../features/meeting/webrtc/ui/VideoGrid';
import { Button } from '@/components/ui/button';
import { PhoneOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface MeetingRoomViewProps {
  meetingId: string;
}

export default function MeetingRoomView({ meetingId }: MeetingRoomViewProps) {
  const router = useRouter();
  const { localStreamRef, localVideoRef, startLocalStream, stopLocalStream } = useMediaStream();
  const {
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
  } = usePeerConnection();

  const handleUserEnter = useCallback(
    (socketId: string) => {
      const pc = createReceiverPC(socketId, socketRef);
      if (pc) createReceiverOffer(pc, socketRef, socketId, meetingId);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [createReceiverPC, createReceiverOffer, meetingId]
  );

  const handleAllUsers = useCallback(
    (userList: Array<{ id: string }>) => {
      userList.forEach((u) => {
        const pc = createReceiverPC(u.id, socketRef);
        if (pc) createReceiverOffer(pc, socketRef, u.id, meetingId);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [createReceiverPC, createReceiverOffer, meetingId]
  );

  const handleUserExit = useCallback(
    (socketId: string) => {
      closeReceiverPC(socketId);
      setUsers((prev) => prev.filter((u) => u.id !== socketId));
    },
    [closeReceiverPC, setUsers]
  );

  const handleSenderAnswer = useCallback(
    async (sdp: RTCSessionDescriptionInit) => {
      if (!sendPCRef.current) return;
      await sendPCRef.current.setRemoteDescription(new RTCSessionDescription(sdp));
    },
    [sendPCRef]
  );

  const handleSenderCandidate = useCallback(
    async (candidate: RTCIceCandidateInit) => {
      if (!sendPCRef.current) return;
      await sendPCRef.current.addIceCandidate(new RTCIceCandidate(candidate));
    },
    [sendPCRef]
  );

  const handleReceiverAnswer = useCallback(
    async (id: string, sdp: RTCSessionDescriptionInit) => {
      const pc = receivePCsRef.current[id];
      if (!pc) return;
      await pc.setRemoteDescription(new RTCSessionDescription(sdp));
    },
    [receivePCsRef]
  );

  const handleReceiverCandidate = useCallback(
    async (id: string, candidate: RTCIceCandidateInit) => {
      const pc = receivePCsRef.current[id];
      if (!pc) return;
      await pc.addIceCandidate(new RTCIceCandidate(candidate));
    },
    [receivePCsRef]
  );

  const { socketRef, connect, disconnect } = useSocketSignaling({
    roomId: meetingId,
    onUserEnter: handleUserEnter,
    onAllUsers: handleAllUsers,
    onUserExit: handleUserExit,
    onSenderAnswer: handleSenderAnswer,
    onSenderCandidate: handleSenderCandidate,
    onReceiverAnswer: handleReceiverAnswer,
    onReceiverCandidate: handleReceiverCandidate,
  });

  useEffect(() => {
    const init = async () => {
      const stream = await startLocalStream();
      if (!stream) return;
      createSenderPC(socketRef, localStreamRef);
      connect();
      await createSenderOffer(socketRef, meetingId);
    };
    init();

    return () => {
      disconnect();
      stopLocalStream();
      closeAllPCs();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meetingId]);

  const handleLeave = () => {
    disconnect();
    stopLocalStream();
    closeAllPCs();
    router.push('/');
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-950">
      <header className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
        <h1 className="text-lg font-semibold text-white">회의 중 · {meetingId}</h1>
        <Button
          variant="destructive"
          size="sm"
          onClick={handleLeave}
          className="flex items-center gap-2"
        >
          <PhoneOff size={16} />
          나가기
        </Button>
      </header>

      <main className="flex-1 overflow-auto">
        <VideoGrid localVideoRef={localVideoRef} users={users} />
      </main>
    </div>
  );
}
