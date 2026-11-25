'use client';

import React from 'react';
import { WebRTCUser } from '@/app/src/entities/meeting';
import { LocalVideo } from './LocalVideo';
import { RemoteVideo } from './RemoteVideo';

interface VideoGridProps {
  localVideoRef: React.RefObject<HTMLVideoElement | null>;
  users: WebRTCUser[];
}

export function VideoGrid({ localVideoRef, users }: VideoGridProps) {
  return (
    <div className="flex flex-wrap gap-3 p-4">
      <LocalVideo videoRef={localVideoRef} />
      {users.map((user) => (
        <RemoteVideo key={user.id} stream={user.stream} socketId={user.id} />
      ))}
    </div>
  );
}
