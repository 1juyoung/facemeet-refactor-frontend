'use client';

import { useRef, useCallback } from 'react';

interface UseMediaStreamReturn {
  localStreamRef: React.MutableRefObject<MediaStream | null>;
  localVideoRef: React.MutableRefObject<HTMLVideoElement | null>;
  startLocalStream: () => Promise<MediaStream | null>;
  stopLocalStream: () => void;
}

export function useMediaStream(): UseMediaStreamReturn {
  const localStreamRef = useRef<MediaStream | null>(null);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);

  const startLocalStream = useCallback(async (): Promise<MediaStream | null> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: { width: 240, height: 240 },
      });
      localStreamRef.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      return stream;
    } catch (e) {
      console.error(`[Media] getUserMedia 오류:`, e);
      return null;
    }
  }, []);

  const stopLocalStream = useCallback(() => {
    localStreamRef.current?.getTracks().forEach((track) => track.stop());
    localStreamRef.current = null;
  }, []);

  return { localStreamRef, localVideoRef, startLocalStream, stopLocalStream };
}
