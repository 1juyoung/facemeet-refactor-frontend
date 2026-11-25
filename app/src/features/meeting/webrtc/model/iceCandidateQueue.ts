// remoteDescription이 설정되기 전에 도착한 ICE candidate를 보관했다가 나중에 적용한다.
const pending = new WeakMap<RTCPeerConnection, RTCIceCandidateInit[]>();

export async function addIceCandidateSafely(
  pc: RTCPeerConnection,
  candidate: RTCIceCandidateInit
): Promise<void> {
  if (!pc.remoteDescription) {
    const queue = pending.get(pc) ?? [];
    queue.push(candidate);
    pending.set(pc, queue);
    return;
  }
  try {
    await pc.addIceCandidate(new RTCIceCandidate(candidate));
  } catch (e) {
    console.error('[ICE] candidate 추가 오류:', e);
  }
}

export async function setRemoteAndFlush(
  pc: RTCPeerConnection,
  sdp: RTCSessionDescriptionInit
): Promise<void> {
  await pc.setRemoteDescription(new RTCSessionDescription(sdp));
  const queue = pending.get(pc) ?? [];
  pending.delete(pc);
  for (const c of queue) {
    try {
      await pc.addIceCandidate(new RTCIceCandidate(c));
    } catch (e) {
      console.error('[ICE] 대기 중이던 candidate 추가 오류:', e);
    }
  }
}
