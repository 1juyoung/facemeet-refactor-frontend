'use client';

import { useRef, useEffect, useCallback } from 'react';
import type { Socket } from 'socket.io-client';

const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001';

interface UseSocketSignalingParams {
  roomId: string;
  onUserEnter: (socketId: string) => void;
  onAllUsers: (users: Array<{ id: string }>) => void;
  onUserExit: (socketId: string) => void;
  onSenderAnswer: (sdp: RTCSessionDescriptionInit) => Promise<void>;
  onSenderCandidate: (candidate: RTCIceCandidateInit) => Promise<void>;
  onReceiverAnswer: (id: string, sdp: RTCSessionDescriptionInit) => Promise<void>;
  onReceiverCandidate: (id: string, candidate: RTCIceCandidateInit) => Promise<void>;
}

export interface UseSocketSignalingReturn {
  socketRef: React.MutableRefObject<Socket | null>;
  connect: () => void;
  disconnect: () => void;
}

export function useSocketSignaling({
  roomId,
  onUserEnter,
  onAllUsers,
  onUserExit,
  onSenderAnswer,
  onSenderCandidate,
  onReceiverAnswer,
  onReceiverCandidate,
}: UseSocketSignalingParams): UseSocketSignalingReturn {
  const socketRef = useRef<Socket | null>(null);

  const disconnect = useCallback(() => {
    socketRef.current?.disconnect();
    socketRef.current = null;
  }, []);

  const connect = useCallback(() => {
    // dynamic import to avoid SSR issues
    import('socket.io-client').then(({ io }) => {
      const socket = io(SOCKET_SERVER_URL);
      socketRef.current = socket;

      socket.on('connect', () => {
        socket.emit('joinRoom', { id: socket.id, roomID: roomId });
      });

      socket.on('userEnter', (data: { id: string }) => onUserEnter(data.id));
      socket.on('allUsers', (data: { users: Array<{ id: string }> }) => onAllUsers(data.users));
      socket.on('userExit', (data: { id: string }) => onUserExit(data.id));

      socket.on('getSenderAnswer', async (data: { sdp: RTCSessionDescriptionInit }) => {
        await onSenderAnswer(data.sdp);
      });

      socket.on('getSenderCandidate', async (data: { candidate: RTCIceCandidateInit }) => {
        if (data.candidate) await onSenderCandidate(data.candidate);
      });

      socket.on('getReceiverAnswer', async (data: { id: string; sdp: RTCSessionDescriptionInit }) => {
        await onReceiverAnswer(data.id, data.sdp);
      });

      socket.on('getReceiverCandidate', async (data: { id: string; candidate: RTCIceCandidateInit }) => {
        if (data.candidate) await onReceiverCandidate(data.id, data.candidate);
      });
    });
  }, [
    roomId,
    onUserEnter,
    onAllUsers,
    onUserExit,
    onSenderAnswer,
    onSenderCandidate,
    onReceiverAnswer,
    onReceiverCandidate,
  ]);

  useEffect(() => {
    return () => { disconnect(); };
  }, [disconnect]);

  return { socketRef, connect, disconnect };
}
