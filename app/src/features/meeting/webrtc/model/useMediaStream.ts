'use client';

import { useRef, useCallback, useState } from 'react';

export interface MediaState {
  /** 권한을 받아 실제 트랙이 있는지 */
  hasAudio: boolean;
  hasVideo: boolean;
  /** 트랙이 있을 때 켜져 있는지 (토글) */
  audioOn: boolean;
  videoOn: boolean;
}

const VIDEO_CONSTRAINTS: MediaTrackConstraints = { width: { ideal: 640 }, height: { ideal: 360 } };

interface UseMediaStreamReturn {
  localStreamRef: React.MutableRefObject<MediaStream | null>;
  localStream: MediaStream | null;
  media: MediaState;
  startLocalStream: () => Promise<MediaStream | null>;
  stopLocalStream: () => void;
  toggleAudio: () => boolean;
  toggleVideo: () => boolean;
}

async function tryGetUserMedia(constraints: MediaStreamConstraints) {
  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch {
    return null;
  }
}

export function useMediaStream(): UseMediaStreamReturn {
  const localStreamRef = useRef<MediaStream | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [media, setMedia] = useState<MediaState>({ hasAudio: false, hasVideo: false, audioOn: false, videoOn: false });

  /**
   * 카메라+마이크 → 카메라만 → 마이크만 순서로 시도한다.
   * 모두 거부되어도 null을 돌려줄 뿐이고, 회의에는 "보기 전용"으로 참여할 수 있다.
   */
  const startLocalStream = useCallback(async (): Promise<MediaStream | null> => {
    if (!navigator.mediaDevices?.getUserMedia) return null;
    const stream =
      (await tryGetUserMedia({ audio: true, video: VIDEO_CONSTRAINTS })) ??
      (await tryGetUserMedia({ video: VIDEO_CONSTRAINTS })) ??
      (await tryGetUserMedia({ audio: true }));

    localStreamRef.current = stream;
    setLocalStream(stream);
    const hasAudio = !!stream?.getAudioTracks().length;
    const hasVideo = !!stream?.getVideoTracks().length;
    setMedia({ hasAudio, hasVideo, audioOn: hasAudio, videoOn: hasVideo });
    if (!stream) console.warn('[Media] 카메라·마이크 권한이 없어 보기 전용으로 참여합니다.');
    return stream;
  }, []);

  const stopLocalStream = useCallback(() => {
    localStreamRef.current?.getTracks().forEach((track) => track.stop());
    localStreamRef.current = null;
    setLocalStream(null);
  }, []);

  /** 트랙을 끄고 켠다 (enabled=false면 상대에게 검은 화면/무음이 전송됨). 바뀐 상태를 돌려준다. */
  const toggleTrack = useCallback((kind: 'audio' | 'video') => {
    const tracks = kind === 'audio' ? localStreamRef.current?.getAudioTracks() : localStreamRef.current?.getVideoTracks();
    if (!tracks?.length) return false;
    const next = !tracks[0].enabled;
    tracks.forEach((t) => (t.enabled = next));
    setMedia((prev) => ({ ...prev, [kind === 'audio' ? 'audioOn' : 'videoOn']: next }));
    return next;
  }, []);

  const toggleAudio = useCallback(() => toggleTrack('audio'), [toggleTrack]);
  const toggleVideo = useCallback(() => toggleTrack('video'), [toggleTrack]);

  return { localStreamRef, localStream, media, startLocalStream, stopLocalStream, toggleAudio, toggleVideo };
}
