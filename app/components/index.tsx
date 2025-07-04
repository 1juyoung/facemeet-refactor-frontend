'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  stream: MediaStream;
  muted?: boolean;
}

const Video = ({ stream, muted }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.srcObject = stream;
    }
    if (muted) {
      setIsMuted(muted);
    }
  }, [stream, muted]);

  return (
    <div className="relative m-[5px] inline-block h-[240px] w-[240px]">
      <video ref={ref} muted={isMuted} autoPlay className="h-full w-full bg-black object-cover" />
    </div>
  );
};

export default Video;
