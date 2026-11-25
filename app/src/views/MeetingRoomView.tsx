'use client';

import React, { useEffect, useCallback, useMemo, useRef, useState } from 'react';
import { useMediaStream } from '../features/meeting/webrtc/model/useMediaStream';
import { usePeerConnection } from '../features/meeting/webrtc/model/usePeerConnection';
import { addIceCandidateSafely, setRemoteAndFlush } from '../features/meeting/webrtc/model/iceCandidateQueue';
import { loadIceServers } from '../features/meeting/webrtc/model/iceConfig';
import { useSocketSignaling } from '../features/meeting/webrtc/model/useSocketSignaling';
import { VideoGrid } from '../features/meeting/webrtc/ui/VideoGrid';
import type { TileModel } from '../features/meeting/webrtc/ui/VideoTile';
import type { JoinPayload, ParticipantEvent, ParticipantState } from '../entities/meeting';
import { ChatPanel } from '../features/meeting/chat/ui/ChatPanel';
import type { ChatMessage } from '../entities/chat/types';
import { useCurrentUser } from '../entities/user/model/useCurrentUser';
import { Check, Copy, MessageSquare, Mic, MicOff, PhoneOff, Users, Video, VideoOff, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface MeetingRoomViewProps {
  meetingId: string;
}

export default function MeetingRoomView({ meetingId }: MeetingRoomViewProps) {
  const router = useRouter();
  const { localStreamRef, localStream, media, startLocalStream, stopLocalStream, toggleAudio, toggleVideo } =
    useMediaStream();
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
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [unread, setUnread] = useState(0);

  // 넓은 화면에서는 채팅을 열어 둔 채로 시작
  useEffect(() => {
    if (window.matchMedia('(min-width: 1024px)').matches) setIsChatOpen(true);
  }, []);

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

  // ---------- 참가자 상태 (영상 연결 여부와 무관하게 모두 표시) ----------
  const [participants, setParticipants] = useState<Record<string, ParticipantState>>({});
  const joinPayloadRef = useRef<JoinPayload>({ audio: false, video: false });
  const [showViewOnlyNotice, setShowViewOnlyNotice] = useState(false);

  const handleParticipantEvent = useCallback((event: ParticipantEvent) => {
    setParticipants((prev) => {
      switch (event.type) {
        case 'list':
          return Object.fromEntries(event.participants.map((p) => [p.id, p]));
        case 'joined':
        case 'updated':
          return { ...prev, [event.participant.id]: event.participant };
        case 'left': {
          const next = { ...prev };
          delete next[event.id];
          return next;
        }
      }
    });
  }, []);

  // 프로필이 입장보다 늦게 도착하면 닉네임만 갱신
  useEffect(() => {
    if (!user?.nickname) return;
    joinPayloadRef.current = { ...joinPayloadRef.current, nickname: user.nickname };
    socketRef.current?.emit('participant:update', { nickname: user.nickname });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.nickname]);

  const handleToggleAudio = () => {
    const on = toggleAudio();
    joinPayloadRef.current.audio = on;
    socketRef.current?.emit('participant:update', { audio: on });
  };
  const handleToggleVideo = () => {
    const on = toggleVideo();
    joinPayloadRef.current.video = on;
    socketRef.current?.emit('participant:update', { video: on });
  };

  // 소켓 연결이 끝나 socket.id가 생긴 뒤에 송신 offer를 보낸다 (내 스트림이 있을 때만)
  const handleConnected = useCallback(() => {
    setMySocketId(socketRef.current?.id ?? null);
    if (sendPCRef.current) createSenderOffer(socketRef, meetingId);
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
    joinPayloadRef,
    onParticipantEvent: handleParticipantEvent,
  });

  useEffect(() => {
    const init = async () => {
      const [stream] = await Promise.all([startLocalStream(), loadIceServers()]);
      joinPayloadRef.current = {
        ...joinPayloadRef.current,
        audio: !!stream?.getAudioTracks().length,
        video: !!stream?.getVideoTracks().length,
      };
      // 권한이 없어도 입장은 한다: 다른 사람 화면을 보고 채팅할 수 있도록
      if (stream) createSenderPC(socketRef, localStreamRef);
      else setShowViewOnlyNotice(true);
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

  const tiles = useMemo<TileModel[]>(() => {
    const me: TileModel = {
      id: mySocketId ?? 'local',
      nickname: user?.nickname ?? '나',
      stream: localStream,
      audio: media.audioOn,
      video: media.videoOn,
      isLocal: true,
    };
    const streamOf = new Map(users.map((u) => [u.id, u.stream]));
    const others: TileModel[] = Object.values(participants)
      .filter((p) => p.id !== mySocketId)
      .map((p) => ({ ...p, stream: streamOf.get(p.id) ?? null, isLocal: false }));
    // 참가자 목록보다 영상이 먼저 도착한 경우도 표시
    users
      .filter((u) => u.id !== mySocketId && !participants[u.id])
      .forEach((u) => others.push({ id: u.id, nickname: '참가자', stream: u.stream, audio: true, video: true, isLocal: false }));
    return [me, ...others];
  }, [mySocketId, user?.nickname, localStream, media, participants, users]);

  return (
    <div className="flex h-dvh flex-col bg-room text-white">
      <header className="flex items-center gap-3 border-b border-white/5 px-4 py-3 md:px-6">
        <h1 className="truncate text-sm font-bold md:text-base">회의 중</h1>
        <CopyIdButton id={meetingId} />
        <span className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-white/60">
          <Users size={14} />
          {tiles.length}명
        </span>
      </header>

      {showViewOnlyNotice && (
        <div className="flex items-start gap-3 bg-amber-500/15 px-4 py-2.5 text-xs text-amber-200 md:px-6">
          <p className="flex-1 leading-relaxed">
            카메라·마이크 권한이 없어 <b>보기 전용</b>으로 참여 중이에요. 다른 참가자의 화면과 채팅은 그대로 이용할 수 있어요.
            말하거나 화면을 보여주려면 주소창의 권한 설정에서 허용한 뒤 새로고침하세요.
          </p>
          <button onClick={() => setShowViewOnlyNotice(false)} aria-label="닫기" className="text-amber-200/70">
            <X size={16} />
          </button>
        </div>
      )}

      <div className="relative flex min-h-0 flex-1">
        <main className="min-w-0 flex-1">
          <VideoGrid tiles={tiles} />
        </main>

        {/* 채팅: 넓은 화면에서는 옆에, 좁은 화면에서는 위에 겹쳐서 */}
        <aside
          className={cn(
            'w-full max-w-sm border-l border-white/5 bg-room-2 lg:static lg:w-80',
            isChatOpen ? 'absolute inset-y-0 right-0 z-10 flex' : 'hidden'
          )}
        >
          <ChatPanel messages={messages} mySocketId={mySocketId} onSend={handleSendChat} />
        </aside>
      </div>

      {/* 하단 컨트롤 */}
      <footer className="flex items-center justify-center gap-2 border-t border-white/5 px-4 py-3 md:gap-3">
        <ControlButton
          label={media.hasAudio ? (media.audioOn ? '마이크 끄기' : '마이크 켜기') : '마이크 권한 없음'}
          active={media.audioOn}
          disabled={!media.hasAudio}
          onClick={handleToggleAudio}
          icon={media.audioOn ? <Mic size={20} /> : <MicOff size={20} />}
        />
        <ControlButton
          label={media.hasVideo ? (media.videoOn ? '카메라 끄기' : '카메라 켜기') : '카메라 권한 없음'}
          active={media.videoOn}
          disabled={!media.hasVideo}
          onClick={handleToggleVideo}
          icon={media.videoOn ? <Video size={20} /> : <VideoOff size={20} />}
        />
        <div className="relative">
          <ControlButton
            label={isChatOpen ? '채팅 닫기' : '채팅 열기'}
            active={!isChatOpen}
            neutral
            onClick={() => {
              setIsChatOpen((v) => !v);
              setUnread(0);
            }}
            icon={<MessageSquare size={20} />}
          />
          {unread > 0 && !isChatOpen && (
            <span className="pointer-events-none absolute -top-1 -right-1 rounded-full bg-red-500 px-1.5 text-[10px] font-bold">
              {unread}
            </span>
          )}
        </div>
        <button
          onClick={handleLeave}
          className="ml-2 flex h-11 items-center gap-2 rounded-full bg-red-500 px-5 text-sm font-bold hover:bg-red-600"
        >
          <PhoneOff size={18} />
          <span className="hidden sm:inline">나가기</span>
        </button>
      </footer>
    </div>
  );
}

function ControlButton({
  label,
  icon,
  active,
  disabled,
  neutral,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  disabled?: boolean;
  neutral?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      aria-pressed={!active}
      className={cn(
        'grid size-11 place-items-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-40',
        active || neutral ? 'bg-room-3 hover:bg-white/15' : 'bg-white text-room hover:bg-white/90',
        neutral && !active && 'bg-brand text-white hover:bg-brand-600'
      )}
    >
      {icon}
    </button>
  );
}

function CopyIdButton({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(id);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          /* 클립보드 권한 없음 */
        }
      }}
      className="flex min-w-0 items-center gap-1.5 rounded-lg bg-room-3 px-2.5 py-1.5 text-xs font-semibold text-white/70 hover:text-white"
    >
      {copied ? <Check size={13} className="text-brand" /> : <Copy size={13} />}
      <span className="max-w-[9rem] truncate">{copied ? '복사됨' : id}</span>
    </button>
  );
}
