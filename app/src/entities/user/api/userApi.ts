import { apiClient } from '@/app/src/shared/api/client';
import { User, ProfileUpdateRequest } from '../types';

export function getProfile(): Promise<User> {
  return apiClient.get<User>('/users/profile');
}

export function updateProfile(data: ProfileUpdateRequest): Promise<User> {
  return apiClient.put<User>('/users/profile', data);
}
