'use client';

import { useEffect, useRef, useState } from 'react';
import { MicOff, Play, VideoOff } from 'lucide-react';
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
}

/**
 * 참가자 한 명의 화면.
 * 카메라가 꺼져 있거나 권한이 없어도 같은 크기의 블록을 차지하고, 아바타와 상태를 보여준다.
 * <video>는 스트림이 있으면 항상 마운트해 둔다 (카메라가 꺼져도 소리는 들려야 하므로).
 */
export function VideoTile({ tile, className }: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
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

  return (
    <div
      className={cn(
        'relative isolate min-h-0 min-w-0 overflow-hidden rounded-2xl bg-room-2 ring-1 ring-white/5',
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
            'absolute inset-0 size-full object-cover',
            tile.isLocal && '-scale-x-100', // 내 화면은 거울처럼
            !showVideo && 'invisible'
          )}
        />
      )}

      {!showVideo && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
          <span className="grid size-16 place-items-center rounded-full bg-brand text-2xl font-extrabold text-white md:size-20 md:text-3xl">
            {tile.nickname.slice(0, 1)}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-white/50">
            <VideoOff size={13} />
            {tile.stream ? '카메라 꺼짐' : '카메라 없음'}
          </span>
        </div>
      )}

      <div className="absolute bottom-2.5 left-2.5 flex max-w-[calc(100%-1.25rem)] items-center gap-1.5 rounded-lg bg-black/55 px-2 py-1 text-xs font-semibold text-white backdrop-blur">
        {!tile.audio && <MicOff size={13} className="shrink-0 text-red-400" aria-label="마이크 꺼짐" />}
        <span className="truncate">{label}</span>
      </div>

      {needsTap && !tile.isLocal && (
        <button
          onClick={() =>
            videoRef.current
              ?.play()
              .then(() => setNeedsTap(false))
              .catch(() => {})
          }
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
