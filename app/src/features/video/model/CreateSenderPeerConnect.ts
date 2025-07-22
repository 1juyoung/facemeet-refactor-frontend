'use client';

import { MutableRefObject } from 'react';

interface CreateSenderPeerConnection {
  socketRef: MutableRefObject<SocketIOClient.Socket | null>;
  localStreamRef: MutableRefObject<MediaStream | null>;
  sendPCRef: MutableRefObject<RTCPeerConnection | null>;
  pc_config: RTCConfiguration;
}

export function CreateSenderPeerConnect({
  socketRef,
  localStreamRef,
  sendPCRef,
  pc_config,
}: CreateSenderPeerConnection): RTCPeerConnection {
  const pc = new RTCPeerConnection(pc_config);

  pc.onicecandidate = (e) => {
    if (!(e.candidate && socketRef?.current)) {
      return;
    }
    console.log('sender PC onicecandidate');
    socketRef.current.emit('senderCandidate', {
      candidate: e.candidate,
      senderSocketID: socketRef.current.id,
    });
  };

  pc.oniceconnectionstatechange = (e) => {
    console.log(e);
  };

  if (localStreamRef.current) {
    console.log('add local stream');
    localStreamRef.current.getTracks().forEach((track) => {
      if (!localStreamRef.current) {
        return;
      }
      pc.addTrack(track, localStreamRef.current);
    });
  } else {
    console.log('no local stream');
  }

  sendPCRef.current = pc;
  return pc;
}
