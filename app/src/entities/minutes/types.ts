export interface EmotionScore {
  id: string;
  meeting_id: string;
  created_at: string;
  score: number;
}

export interface MeetingMinutes {
  id: string;
  meeting_id: string;
  emotion_score_id: string;
  date: string;
  content: string;
  emotion_score: EmotionScore | null;
}

export interface CreateMinutesRequest {
  content: string;
  score: number;
}

export interface UpdateMinutesRequest {
  content?: string;
  score?: number;
}
