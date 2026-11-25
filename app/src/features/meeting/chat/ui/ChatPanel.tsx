'use client';

import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ChatMessage } from '@/app/src/entities/chat/types';

interface ChatPanelProps {
  messages: ChatMessage[];
  mySocketId: string | null;
  onSend: (text: string) => void;
}

const MAX_LENGTH = 500;

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString('ko-KR', { hour: 'numeric', minute: '2-digit' });
}

export function ChatPanel({ messages, mySocketId, onSend }: ChatPanelProps) {
  const [text, setText] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  // 새 메시지가 오면 맨 아래로
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const send = () => {
    const value = text.trim();
    if (!value) return;
    onSend(value);
    setText('');
  };

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div className="border-b border-white/5 px-4 py-3 text-sm font-bold text-white">채팅</div>

      <div ref={listRef} className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-3 py-4">
        {messages.length === 0 && (
          <p className="mt-6 text-center text-xs text-white/40">아직 메시지가 없어요. 첫 메시지를 보내 보세요.</p>
        )}
        {messages.map((m) => {
          const mine = m.senderId === mySocketId;
          return (
            <div key={m.id} className={cn('flex max-w-[90%] gap-2', mine && 'self-end flex-row-reverse')}>
              {!mine && (
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-room-3 text-[11px] font-bold text-white">
                  {m.nickname.slice(0, 1)}
                </span>
              )}
              <div className="min-w-0">
                {!mine && <p className="mb-1 text-[11px] font-semibold text-white/50">{m.nickname}</p>}
                <p
                  className={cn(
                    'rounded-xl px-3 py-2 text-[13px] leading-relaxed break-words whitespace-pre-wrap',
                    mine ? 'rounded-tr-sm bg-brand text-white' : 'rounded-tl-sm bg-room-3 text-white/90'
                  )}
                >
                  {m.text}
                </p>
              </div>
              <span className="self-end text-[10px] whitespace-nowrap text-white/35">{formatTime(m.sentAt)}</span>
            </div>
          );
        })}
      </div>

      <form
        className="m-3 flex items-center gap-2 rounded-xl bg-room-3 px-3 py-2"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        {/* 모바일 사파리는 16px 미만 입력창에 포커스하면 화면을 확대하므로 모바일에서는 16px */}
        <input
          value={text}
          maxLength={MAX_LENGTH}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            // 한글 조합 중 Enter는 무시 (마지막 글자가 한 번 더 전송되는 문제 방지)
            if (e.key === 'Enter' && e.nativeEvent.isComposing) e.preventDefault();
          }}
          placeholder="메시지를 입력하세요"
          aria-label="채팅 메시지"
          className="min-w-0 flex-1 bg-transparent text-base text-white md:text-sm outline-none placeholder:text-white/35"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          aria-label="보내기"
          className="grid size-8 place-items-center rounded-lg bg-brand text-white disabled:opacity-40"
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
