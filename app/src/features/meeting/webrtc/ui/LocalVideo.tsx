'use client';

import React from 'react';

interface LocalVideoProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  muted?: boolean;
}

export function LocalVideo({ videoRef, muted = true }: LocalVideoProps) {
  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        muted={muted}
        playsInline
        className="h-[240px] w-[240px] rounded-lg bg-gray-900 object-cover"
      />
      <span className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-0.5 text-xs text-white">
        나
      </span>
    </div>
  );
}
