'use client';

import React, { useEffect, useRef } from 'react';

interface RemoteVideoProps {
  stream: MediaStream;
  socketId: string;
}

export function RemoteVideo({ stream, socketId }: RemoteVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="h-[240px] w-[240px] rounded-lg bg-gray-900 object-cover"
      />
      <span className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-0.5 text-xs text-white">
        {socketId.slice(0, 6)}
      </span>
    </div>
  );
}
