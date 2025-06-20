'use client';

import { Logo } from '@/components/logo';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MeetingList } from '../../features/home/ui/meeting-list';

export function Sidebar() {
  return (
    <div className="w-80 border-r border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-8">
        <Logo />
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">최근 회의</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">참여했던 회의 목록입니다</p>
      </div>

      <ScrollArea className="h-[calc(100vh-220px)]">
        <MeetingList />
      </ScrollArea>
    </div>
  );
}
