import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarPlus, UserPlus, User, FileText, ChevronRight, BarChart3 } from 'lucide-react';
import { CreateMeetingDialog } from '../model/create-meeting-dialog';
import { JoinMeetingDialog } from '../model/join-meeting-dialog';

export function MainDashboard() {
  const [isCreateMeetingOpen, setIsCreateMeetingOpen] = useState(false);
  const [isJoinMeetingOpen, setIsJoinMeetingOpen] = useState(false);

  return (
    <div className="flex-1 p-8">
      <div className="mx-auto max-w-5xl">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">안녕하세요, 홍길동님</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            오늘도 FaceMeet과 함께 효율적인 회의를 진행하세요.
          </p>
        </div>

        {/* 상단 버튼 그룹 */}
        <div className="mb-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          <Card className="overflow-hidden transition-all duration-200 hover:shadow-md dark:bg-gray-800">
            <Button
              variant="ghost"
              className="h-full w-full p-6 text-left"
              onClick={() => setIsCreateMeetingOpen(true)}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900 dark:text-green-300">
                  <CalendarPlus size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">회의 생성</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    새로운 회의를 시작합니다
                  </p>
                </div>
                <div className="mt-auto self-end">
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </div>
            </Button>
          </Card>

          <Card className="overflow-hidden transition-all duration-200 hover:shadow-md dark:bg-gray-800">
            <Button
              variant="ghost"
              className="h-full w-full p-6 text-left"
              onClick={() => setIsJoinMeetingOpen(true)}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <UserPlus size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">회의 참가</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    초대받은 회의에 참가합니다
                  </p>
                </div>
                <div className="mt-auto self-end">
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </div>
            </Button>
          </Card>

          <Card className="overflow-hidden transition-all duration-200 hover:shadow-md dark:bg-gray-800">
            <Button
              variant="ghost"
              className="h-full w-full p-6 text-left"
              // onClick={() => setActiveComponent('profile')}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">내 프로필</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    프로필 정보를 관리합니다
                  </p>
                </div>
                <div className="mt-auto self-end">
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </div>
            </Button>
          </Card>

          <Card className="overflow-hidden transition-all duration-200 hover:shadow-md dark:bg-gray-800">
            <Button
              variant="ghost"
              className="h-full w-full p-6 text-left"
              // onClick={() => setActiveComponent('records')}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="rounded-full bg-amber-100 p-3 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">회의록</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    지난 회의 기록을 확인합니다
                  </p>
                </div>
                <div className="mt-auto self-end">
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </div>
            </Button>
          </Card>
        </div>

        {/* 통계 요약 */}
        <div className="mb-10">
          <Card className="overflow-hidden dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <BarChart3 className="mr-2 text-green-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">회의 통계</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">이번 달 회의</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">12회</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">평균 회의 시간</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">45분</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">평균 감정 점수</p>
                  <p className="text-2xl font-bold text-green-500">78.5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* 다이얼로그 */}
      <CreateMeetingDialog open={isCreateMeetingOpen} onOpenChange={setIsCreateMeetingOpen} />
      <JoinMeetingDialog open={isJoinMeetingOpen} onOpenChange={setIsJoinMeetingOpen} />
    </div>
  );
}
