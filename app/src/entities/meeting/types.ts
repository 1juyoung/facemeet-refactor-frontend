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
