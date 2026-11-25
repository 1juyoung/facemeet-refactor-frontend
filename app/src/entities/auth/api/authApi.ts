import { apiClient, setToken, clearToken } from '@/app/src/shared/api/client';
import { LoginRequest, SignupRequest, AuthResponse } from '../types';

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const res = await apiClient.post<AuthResponse>('/auth/login', data);
  setToken(res.token);
  return res;
}

export async function signup(data: SignupRequest): Promise<AuthResponse> {
  const res = await apiClient.post<AuthResponse>('/auth/register', data);
  setToken(res.token);
  return res;
}

export function logout(): void {
  clearToken();
}
