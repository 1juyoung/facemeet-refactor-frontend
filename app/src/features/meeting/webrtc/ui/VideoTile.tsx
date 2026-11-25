'use client';

import { useEffect, useRef, useState } from 'react';
import { MicOff, Minimize2, Play, VideoOff } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TileModel {
  id: string;
  nickname: string;
  stream: MediaStream | null;
  audio: boolean;
  video: boolean;
  isLocal: boolean;
}

interface VideoTileProps {
  tile: TileModel;
  className?: string;
  /** 하단 목록에 들어가는 작은 타일 */
  compact?: boolean;
  /** 크게 보기로 고정된 타일 */
  pinned?: boolean;
  /** 더블클릭(모바일은 두 번 탭) 시 호출 */
  onDoubleActivate?: () => void;
}

const DOUBLE_TAP_MS = 300;

/**
 * 참가자 한 명의 화면.
 * 카메라가 꺼져 있거나 권한이 없어도 같은 크기의 블록을 차지하고, 아바타와 상태를 보여준다.
 * <video>는 스트림이 있으면 항상 마운트해 둔다 (카메라가 꺼져도 소리는 들려야 하므로).
 */
export function VideoTile({ tile, className, compact, pinned, onDoubleActivate }: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastTapRef = useRef(0);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.srcObject !== tile.stream) el.srcObject = tile.stream;
    if (!tile.stream) return;
    // 모바일·사파리는 소리 있는 자동 재생을 막을 수 있어, 실패하면 "탭해서 재생"을 띄운다
    el.play()
      .then(() => setNeedsTap(false))
      .catch(() => setNeedsTap(true));
  }, [tile.stream]);

  const showVideo = !!tile.stream && tile.video;
  const label = tile.isLocal ? `${tile.nickname} (나)` : tile.nickname;

  // 모바일 브라우저는 dblclick이 일정하지 않아 클릭 간격으로 두 번 탭을 직접 판별한다
  const handleClick = () => {
    if (!onDoubleActivate) return;
    const now = Date.now();
    if (now - lastTapRef.current < DOUBLE_TAP_MS) {
      lastTapRef.current = 0;
      onDoubleActivate();
    } else {
      lastTapRef.current = now;
    }
  };

  return (
    <div
      onClick={handleClick}
      title={onDoubleActivate ? (pinned ? '더블클릭해서 원래대로' : '더블클릭해서 크게 보기') : undefined}
      className={cn(
        'relative isolate min-h-0 min-w-0 touch-manipulation overflow-hidden bg-room-2 ring-1 ring-white/5 select-none',
        compact ? 'rounded-xl' : 'rounded-2xl',
        onDoubleActivate && 'cursor-pointer',
        className
      )}
    >
      {tile.stream && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={tile.isLocal}
          className={cn(
            'absolute inset-0 size-full object-contain', // 잘리거나 확대되지 않게 원본 비율 유지
            tile.isLocal && '-scale-x-100', // 내 화면은 거울처럼
            !showVideo && 'invisible'
          )}
        />
      )}

      {!showVideo && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
          <span
            className={cn(
              'grid place-items-center rounded-full bg-brand font-extrabold text-white',
              compact ? 'size-9 text-base' : 'size-16 text-2xl md:size-20 md:text-3xl'
            )}
          >
            {tile.nickname.slice(0, 1)}
          </span>
          {!compact && (
            <span className="flex items-center gap-1 text-xs font-semibold text-white/50">
              <VideoOff size={13} />
              {tile.stream ? '카메라 꺼짐' : '카메라 없음'}
            </span>
          )}
        </div>
      )}

      <div
        className={cn(
          'absolute flex items-center gap-1.5 rounded-lg bg-black/55 font-semibold text-white backdrop-blur',
          compact
            ? 'bottom-1.5 left-1.5 max-w-[calc(100%-0.75rem)] px-1.5 py-0.5 text-[11px]'
            : 'bottom-2.5 left-2.5 max-w-[calc(100%-1.25rem)] px-2 py-1 text-xs'
        )}
      >
        {!tile.audio && <MicOff size={13} className="shrink-0 text-red-400" aria-label="마이크 꺼짐" />}
        <span className="truncate">{label}</span>
      </div>

      {pinned && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDoubleActivate?.();
          }}
          className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-lg bg-black/55 px-2 py-1 text-xs font-semibold text-white backdrop-blur hover:bg-black/70"
        >
          <Minimize2 size={13} />
          원래대로
        </button>
      )}

      {needsTap && !tile.isLocal && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            videoRef.current
              ?.play()
              .then(() => setNeedsTap(false))
              .catch(() => {});
          }}
          className="absolute inset-0 grid place-items-center bg-black/50 text-sm font-bold text-white"
        >
          <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
            <Play size={16} />
            탭해서 재생
          </span>
        </button>
      )}
    </div>
  );
}
