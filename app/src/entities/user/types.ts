export interface User {
  id: string;
  email: string;
  nickname: string;
  state: boolean;
  createdAt: string;
}

export interface ProfileUpdateRequest {
  nickname?: string;
  password?: string;
}
