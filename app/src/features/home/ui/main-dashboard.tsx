'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CalendarDays, Check, Copy, LogIn, Plus, Trash2, Video } from 'lucide-react';
import { Meeting } from '@/app/src/entities/meeting/types';
import { deleteMeeting, getMeetings, joinMeeting } from '@/app/src/entities/meeting/api/meetingApi';
import { useCurrentUser } from '@/app/src/entities/user/model/useCurrentUser';
import { CreateMeetingDialog } from '../model/create-meeting-dialog';

type LoadState = 'loading' | 'ready' | 'error';

function startOfWeek(d: Date) {
  const day = (d.getDay() + 6) % 7; // 월요일 시작
  const s = new Date(d.getFullYear(), d.getMonth(), d.getDate() - day);
  return s;
}

function formatDateTime(value: string) {
  const d = new Date(value);
  const date = d.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'short' });
  const time = d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  return { date, time };
}

function todayLabel() {
  return new Date().toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'long' });
}

export function MainDashboard() {
  const router = useRouter();
  const { user, status } = useCurrentUser();
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loadState, setLoadState] = useState<LoadState>('loading');
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const fetchMeetings = useCallback(async () => {
    setLoadState('loading');
    try {
      setMeetings(await getMeetings());
      setLoadState('ready');
    } catch {
      setLoadState('error');
    }
  }, []);

  useEffect(() => {
    if (status === 'authenticated') fetchMeetings();
  }, [status, fetchMeetings]);

  const stats = useMemo(() => {
    const now = new Date();
    const weekStart = startOfWeek(now);
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const created = meetings.map((m) => new Date(m.created_at));
    return {
      week: created.filter((d) => d >= weekStart).length,
      month: created.filter((d) => d >= monthStart).length,
      total: meetings.length,
    };
  }, [meetings]);

  const handleDelete = async (id: string) => {
    if (!confirm('회의를 삭제하시겠습니까?')) return;
    try {
      await deleteMeeting(id);
      setMeetings((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const isGuest = status === 'guest';

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4">
      {/* 인사 */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold tracking-tight md:text-2xl">
            {user ? `안녕하세요, ${user.nickname}님` : '안녕하세요'}
          </h1>
          <p className="mt-1 text-sm text-ink-muted">
            {isGuest ? '로그인하면 내 회의 목록과 기록을 볼 수 있어요' : '오늘도 FaceMeet에서 회의를 시작해 보세요'}
          </p>
        </div>
        <span className="flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-2 text-sm font-bold">
          <CalendarDays size={15} />
          {todayLabel()}
        </span>
      </div>

      {/* 빠른 시작 */}
      <div className="grid gap-3 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-4 rounded-2xl bg-brand p-5 text-white">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-white/20">
              <Plus size={20} />
            </span>
            <div>
              <h2 className="text-base font-extrabold">새 회의 시작하기</h2>
              <p className="mt-0.5 text-xs text-white/80">회의를 만들고 링크를 공유하세요</p>
            </div>
          </div>
          <div>
            {isGuest ? (
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-sm font-bold text-brand-600"
              >
                <LogIn size={15} />
                로그인하고 시작
              </Link>
            ) : (
              <button
                onClick={() => setIsCreateOpen(true)}
                disabled={status !== 'authenticated'}
                className="rounded-lg bg-white px-3.5 py-2 text-sm font-bold text-brand-600 disabled:opacity-60"
              >
                회의 만들기
              </button>
            )}
          </div>
        </div>

        <JoinByIdCard onJoined={(id) => router.push(`/meeting/${id}`)} disabled={isGuest} />
      </div>

      {/* 통계 (회의 목록에서 계산한 실제 값) */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="이번 주 회의" value={stats.week} unit="회" pending={loadState !== 'ready'} />
        <StatCard label="이번 달 회의" value={stats.month} unit="회" pending={loadState !== 'ready'} />
        <StatCard label="전체 회의" value={stats.total} unit="회" pending={loadState !== 'ready'} />
      </div>

      {/* 최근 회의 */}
      <section className="rounded-2xl border border-line bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold">최근 회의</h2>
          {loadState === 'ready' && <span className="text-xs font-semibold text-ink-muted">{meetings.length}개</span>}
        </div>

        {isGuest ? (
          <EmptyState
            title="로그인이 필요해요"
            description="로그인하면 내가 만들거나 참가한 회의가 여기에 표시돼요."
            action={
              <Link href="/login" className="rounded-lg bg-brand px-3.5 py-2 text-sm font-bold text-white hover:bg-brand-600">
                로그인
              </Link>
            }
          />
        ) : loadState === 'loading' ? (
          <div className="space-y-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-12 animate-pulse rounded-lg bg-line-soft" />
            ))}
          </div>
        ) : loadState === 'error' ? (
          <EmptyState
            title="회의 목록을 불러오지 못했어요"
            description="잠시 후 다시 시도해 주세요."
            action={
              <button onClick={fetchMeetings} className="rounded-lg border border-line px-3.5 py-2 text-sm font-bold">
                다시 시도
              </button>
            }
          />
        ) : meetings.length === 0 ? (
          <EmptyState
            title="아직 회의가 없어요"
            description="새 회의를 만들거나 회의 ID로 참가해 보세요."
            action={
              <button
                onClick={() => setIsCreateOpen(true)}
                className="rounded-lg bg-brand px-3.5 py-2 text-sm font-bold text-white hover:bg-brand-600"
              >
                회의 만들기
              </button>
            }
          />
        ) : (
          <MeetingTable meetings={meetings} onEnter={(id) => router.push(`/meeting/${id}`)} onDelete={handleDelete} />
        )}
      </section>

      <CreateMeetingDialog open={isCreateOpen} onOpenChange={setIsCreateOpen} />
    </div>
  );
}

function StatCard({ label, value, unit, pending }: { label: string; value: number; unit: string; pending: boolean }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-4">
      <p className="text-xs font-semibold text-ink-muted">{label}</p>
      <p className="mt-2 text-2xl font-extrabold tracking-tight">
        {pending ? <span className="text-ink-faint">–</span> : value}
        {!pending && <small className="ml-0.5 text-sm font-semibold text-ink-muted">{unit}</small>}
      </p>
    </div>
  );
}

function JoinByIdCard({ onJoined, disabled }: { onJoined: (id: string) => void; disabled: boolean }) {
  const [meetingId, setMeetingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleJoin = async () => {
    const id = meetingId.trim();
    if (!id) return;
    setError('');
    setLoading(true);
    try {
      await joinMeeting(id);
      onJoined(id);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <LogIn size={20} />
        </span>
        <div>
          <h2 className="text-base font-extrabold">회의 ID로 참가</h2>
          <p className="mt-0.5 text-xs text-ink-muted">전달받은 회의 ID를 입력하세요</p>
        </div>
      </div>
      <div className="flex gap-2">
        <input
          value={meetingId}
          onChange={(e) => setMeetingId(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) handleJoin();
          }}
          disabled={disabled}
          placeholder="회의 ID"
          className="min-w-0 flex-1 rounded-lg border border-line bg-line-soft px-3 py-2 text-sm outline-none focus:border-brand focus:bg-white disabled:opacity-60"
        />
        <button
          onClick={handleJoin}
          disabled={disabled || loading || !meetingId.trim()}
          className="rounded-lg bg-brand px-3.5 py-2 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50"
        >
          {loading ? '확인 중' : '참가'}
        </button>
      </div>
      {error && <p className="-mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function MeetingTable({
  meetings,
  onEnter,
  onDelete,
}: {
  meetings: Meeting[];
  onEnter: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyId = async (id: string) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(id);
      setTimeout(() => setCopiedId((cur) => (cur === id ? null : cur)), 1500);
    } catch {
      /* 클립보드 권한이 없으면 무시 */
    }
  };

  return (
    <ul className="divide-y divide-line-soft">
      {meetings.map((m) => {
        const { date, time } = formatDateTime(m.created_at);
        return (
          <li key={m.id} className="flex items-center gap-3 py-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
              <Video size={16} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{m.title}</p>
              <p className="mt-0.5 text-xs text-ink-muted">
                {date} · {time}
              </p>
            </div>
            <button
              onClick={() => copyId(m.id)}
              title="회의 ID 복사"
              className="hidden items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-ink-muted hover:bg-line-soft sm:flex"
            >
              {copiedId === m.id ? <Check size={14} className="text-brand" /> : <Copy size={14} />}
              {copiedId === m.id ? '복사됨' : 'ID 복사'}
            </button>
            <button
              onClick={() => onDelete(m.id)}
              title="회의 삭제"
              className="rounded-lg p-2 text-ink-faint hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 size={15} />
            </button>
            <button
              onClick={() => onEnter(m.id)}
              className="rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-white hover:bg-brand-600"
            >
              입장
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 py-10 text-center">
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-ink-muted">{description}</p>
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
