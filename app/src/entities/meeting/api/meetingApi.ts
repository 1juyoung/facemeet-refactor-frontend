import { apiClient } from '@/app/src/shared/api/client';
import { Meeting, Participant, CreateMeetingRequest } from '../types';

export function getMeetings(): Promise<Meeting[]> {
  return apiClient.get<Meeting[]>('/meetings');
}

export function getMeeting(id: string): Promise<Meeting> {
  return apiClient.get<Meeting>(`/meetings/${id}`);
}

export function createMeeting(data: CreateMeetingRequest): Promise<Meeting> {
  return apiClient.post<Meeting>('/meetings', data);
}

export function deleteMeeting(id: string): Promise<void> {
  return apiClient.delete<void>(`/meetings/${id}`);
}

export function joinMeeting(id: string): Promise<Participant> {
  return apiClient.put<Participant>(`/meetings/${id}/join`);
}
