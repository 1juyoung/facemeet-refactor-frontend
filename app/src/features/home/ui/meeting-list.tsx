'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, Users } from 'lucide-react';

// 임시 회의 데이터
const meetings = [
  { id: '1', name: '팀 주간 미팅', date: '2025-05-22', time: '14:00', participants: 4 },
  { id: '2', name: '프로젝트 기획', date: '2025-05-21', time: '10:30', participants: 3 },
  { id: '3', name: '디자인 리뷰', date: '2025-05-20', time: '16:00', participants: 4 },
  { id: '4', name: '사용자 테스트', date: '2025-05-19', time: '11:00', participants: 2 },
  { id: '5', name: '스프린트 회고', date: '2025-05-18', time: '15:30', participants: 5 },
];

export function MeetingList() {
  const router = useRouter();

  const joinMeeting = (id: string) => {
    router.push(`/meeting/${id}`);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <div
          key={meeting.id}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-green-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-800"
        >
          <h3 className="font-medium text-gray-900 dark:text-white">{meeting.name}</h3>

          <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(meeting.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{meeting.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{meeting.participants}명</span>
            </div>
          </div>

          <Button
            className="mt-3 w-full bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
            size="sm"
            onClick={() => joinMeeting(meeting.id)}
          >
            참가하기
          </Button>
        </div>
      ))}
    </div>
  );
}
