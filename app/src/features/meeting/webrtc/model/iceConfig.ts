const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
const FALLBACK: RTCIceServer[] = [{ urls: 'stun:stun.l.google.com:19302' }];

let iceServers: RTCIceServer[] = FALLBACK;

/** 서버에서 STUN/TURN 설정(TURN 임시 자격 증명 포함)을 받아 캐시한다. 실패하면 STUN만 사용 */
export async function loadIceServers(): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/ice-servers`);
    if (!res.ok) throw new Error(res.statusText);
    const data: { iceServers: RTCIceServer[] } = await res.json();
    if (Array.isArray(data.iceServers) && data.iceServers.length > 0) iceServers = data.iceServers;
  } catch (e) {
    console.warn('[ICE] 서버 설정을 불러오지 못해 기본 STUN을 사용합니다:', e);
    iceServers = FALLBACK;
  }
}

export function getRtcConfig(): RTCConfiguration {
  return { iceServers };
}
