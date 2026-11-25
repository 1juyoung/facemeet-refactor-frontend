export type WebRTCUser = {
  id: string;
  stream: MediaStream;
};

export interface Meeting {
  id: string;
  title: string;
  created_at: string;
  delete_at: string | null;
}

export interface Participant {
  id: string;
  user_id: string;
  meeting_id: string;
  joined_at: string;
  left_at: string | null;
}

export interface CreateMeetingRequest {
  title: string;
}

export interface JoinMeetingRequest {
  meetingId: string;
}

/** 회의실 참가자 상태 (영상 연결과 별개로 서버가 관리) */
export interface ParticipantState {
  id: string;
  nickname: string;
  audio: boolean;
  video: boolean;
}

export type ParticipantEvent =
  | { type: 'list'; participants: ParticipantState[] }
  | { type: 'joined' | 'updated'; participant: ParticipantState }
  | { type: 'left'; id: string };

export interface JoinPayload {
  nickname?: string;
  audio: boolean;
  video: boolean;
}
