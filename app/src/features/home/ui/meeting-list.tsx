'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Meeting } from '@/app/src/entities/meeting/types';
import { getMeetings, deleteMeeting } from '@/app/src/entities/meeting/api/meetingApi';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
}

interface MeetingListProps {
  showDelete?: boolean;
}

export function MeetingList({ showDelete = false }: MeetingListProps) {
  const router = useRouter();
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMeetings = async () => {
    try {
      const data = await getMeetings();
      setMeetings(data);
    } catch {
      // 비로그인 상태면 빈 목록 표시
      setMeetings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!confirm('회의를 삭제하시겠습니까?')) return;
    try {
      await deleteMeeting(id);
      setMeetings((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  if (loading) {
    return <p className="text-sm text-gray-400">불러오는 중...</p>;
  }

  if (meetings.length === 0) {
    return <p className="text-sm text-gray-400">참여한 회의가 없습니다.</p>;
  }

  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <div
          key={meeting.id}
          className="cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-green-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-800"
          onClick={() => router.push(`/meeting/${meeting.id}`)}
        >
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-gray-900 dark:text-white">{meeting.title}</h3>
            {showDelete && (
              <button
                onClick={(e) => handleDelete(e, meeting.id)}
                className="ml-2 text-gray-400 hover:text-red-500"
                title="회의 삭제"
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(meeting.created_at)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{new Date(meeting.created_at).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
          <Button
            className="mt-3 w-full bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/meeting/${meeting.id}`);
            }}
          >
            참가하기
          </Button>
        </div>
      ))}
    </div>
  );
}
