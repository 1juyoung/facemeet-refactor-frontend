'use client';

import React, { useEffect, useCallback, useState } from 'react';
import { useMediaStream } from '../features/meeting/webrtc/model/useMediaStream';
import { usePeerConnection } from '../features/meeting/webrtc/model/usePeerConnection';
import { addIceCandidateSafely, setRemoteAndFlush } from '../features/meeting/webrtc/model/iceCandidateQueue';
import { loadIceServers } from '../features/meeting/webrtc/model/iceConfig';
import { useSocketSignaling } from '../features/meeting/webrtc/model/useSocketSignaling';
import { VideoGrid } from '../features/meeting/webrtc/ui/VideoGrid';
import { ChatPanel } from '../features/meeting/chat/ui/ChatPanel';
import type { ChatMessage } from '../entities/chat/types';
import { useCurrentUser } from '../entities/user/model/useCurrentUser';
import { Button } from '@/components/ui/button';
import { MessageSquare, PhoneOff } from 'lucide-react';
import { cn } from '@/lib/utils';
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
      await setRemoteAndFlush(sendPCRef.current, sdp);
    },
    [sendPCRef]
  );

  const handleSenderCandidate = useCallback(
    async (candidate: RTCIceCandidateInit) => {
      if (!sendPCRef.current) return;
      await addIceCandidateSafely(sendPCRef.current, candidate);
    },
    [sendPCRef]
  );

  const handleReceiverAnswer = useCallback(
    async (id: string, sdp: RTCSessionDescriptionInit) => {
      const pc = receivePCsRef.current[id];
      if (!pc) return;
      await setRemoteAndFlush(pc, sdp);
    },
    [receivePCsRef]
  );

  const handleReceiverCandidate = useCallback(
    async (id: string, candidate: RTCIceCandidateInit) => {
      const pc = receivePCsRef.current[id];
      if (!pc) return;
      await addIceCandidateSafely(pc, candidate);
    },
    [receivePCsRef]
  );

  // ---------- 채팅 ----------
  const { user } = useCurrentUser();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [mySocketId, setMySocketId] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false); // 작은 화면에서 채팅 패널 열기
  const [unread, setUnread] = useState(0);

  const handleChatHistory = useCallback((history: ChatMessage[]) => setMessages(history), []);
  const handleChatMessage = useCallback((message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
    // 내가 보낸 메시지는 안 읽은 수에 포함하지 않음
    if (message.senderId !== socketRef.current?.id) setUnread((n) => n + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSendChat = (text: string) => {
    socketRef.current?.emit('chat:send', { text, nickname: user?.nickname });
  };

  // 소켓 연결이 끝나 socket.id가 생긴 뒤에 송신 offer를 보낸다
  const handleConnected = useCallback(() => {
    setMySocketId(socketRef.current?.id ?? null);
    createSenderOffer(socketRef, meetingId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createSenderOffer, meetingId]);

  const { socketRef, connect, disconnect } = useSocketSignaling({
    roomId: meetingId,
    onUserEnter: handleUserEnter,
    onAllUsers: handleAllUsers,
    onUserExit: handleUserExit,
    onSenderAnswer: handleSenderAnswer,
    onSenderCandidate: handleSenderCandidate,
    onReceiverAnswer: handleReceiverAnswer,
    onReceiverCandidate: handleReceiverCandidate,
    onConnected: handleConnected,
    onChatHistory: handleChatHistory,
    onChatMessage: handleChatMessage,
  });

  useEffect(() => {
    const init = async () => {
      const [stream] = await Promise.all([startLocalStream(), loadIceServers()]);
      if (!stream) return;
      createSenderPC(socketRef, localStreamRef);
      connect();
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
    <div className="flex h-screen flex-col bg-room text-white">
      <header className="flex items-center gap-3 border-b border-white/5 px-4 py-3 md:px-6">
        <h1 className="truncate text-sm font-bold md:text-base">회의 중 · {meetingId}</h1>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => {
              setIsChatOpen((v) => !v);
              setUnread(0);
            }}
            className="relative flex items-center gap-1.5 rounded-lg bg-room-3 px-3 py-2 text-xs font-bold lg:hidden"
          >
            <MessageSquare size={15} />
            채팅
            {unread > 0 && !isChatOpen && (
              <span className="absolute -top-1 -right-1 rounded-full bg-red-500 px-1.5 text-[10px]">{unread}</span>
            )}
          </button>
          <Button variant="destructive" size="sm" onClick={handleLeave} className="flex items-center gap-2">
            <PhoneOff size={16} />
            나가기
          </Button>
        </div>
      </header>

      <div className="relative flex min-h-0 flex-1">
        <main className="min-w-0 flex-1 overflow-auto">
          <VideoGrid localVideoRef={localVideoRef} users={users} />
        </main>

        {/* 채팅: 넓은 화면에서는 항상, 좁은 화면에서는 버튼으로 열기 */}
        <aside
          className={cn(
            'w-full max-w-sm border-l border-white/5 bg-room-2 lg:static lg:flex lg:w-80',
            isChatOpen ? 'absolute inset-y-0 right-0 flex' : 'hidden'
          )}
        >
          <ChatPanel messages={messages} mySocketId={mySocketId} onSend={handleSendChat} />
        </aside>
      </div>
    </div>
  );
}
