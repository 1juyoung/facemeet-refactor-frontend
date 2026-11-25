import { apiClient } from '@/app/src/shared/api/client';
import { MeetingMinutes, CreateMinutesRequest, UpdateMinutesRequest } from '../types';

export function getNotesByMeeting(meetingId: string): Promise<MeetingMinutes[]> {
  return apiClient.get<MeetingMinutes[]>(`/meetings/${meetingId}/minutes`);
}

export function getNoteById(id: string): Promise<MeetingMinutes> {
  return apiClient.get<MeetingMinutes>(`/minutes/${id}`);
}

export function createNote(meetingId: string, data: CreateMinutesRequest): Promise<MeetingMinutes> {
  return apiClient.post<MeetingMinutes>(`/meetings/${meetingId}/minutes`, data);
}

export function updateNote(id: string, data: UpdateMinutesRequest): Promise<MeetingMinutes> {
  return apiClient.put<MeetingMinutes>(`/minutes/${id}`, data);
}

export function deleteNote(id: string): Promise<void> {
  return apiClient.delete<void>(`/minutes/${id}`);
}
