'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MeetingMinutes } from '@/app/src/entities/minutes/types';
import { getNoteById, updateNote, createNote } from '@/app/src/entities/minutes/api/minutesApi';
import { MinutesForm } from '../../features/minutes/ui/MinutesForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface MinutesEditViewProps {
  noteId?: string;       // 수정 시
  meetingId?: string;    // 신규 작성 시
}

export function MinutesEditView({ noteId, meetingId }: MinutesEditViewProps) {
  const router = useRouter();
  const [note, setNote] = useState<MeetingMinutes | undefined>(undefined);
  const [loading, setLoading] = useState(!!noteId);

  useEffect(() => {
    if (!noteId) return;
    getNoteById(noteId)
      .then(setNote)
      .catch(() => alert('회의록을 불러올 수 없습니다.'))
      .finally(() => setLoading(false));
  }, [noteId]);

  const handleSubmit = async (data: { content: string; score: number }) => {
    if (noteId) {
      await updateNote(noteId, data);
      router.back();
    } else if (meetingId) {
      await createNote(meetingId, data);
      router.back();
    }
  };

  if (loading) return <p className="p-6 text-gray-400">불러오는 중...</p>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl p-6">
        <div className="mb-6 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft size={16} />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {noteId ? '회의록 수정' : '회의록 작성'}
          </h1>
        </div>
        <MinutesForm
          initial={note}
          onSubmit={handleSubmit}
          onCancel={() => router.back()}
        />
      </div>
    </div>
  );
}
