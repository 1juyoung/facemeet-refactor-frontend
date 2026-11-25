'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MeetingMinutes, EmotionScore } from '@/app/src/entities/minutes/types';
import { getNotesByMeeting, deleteNote } from '@/app/src/entities/minutes/api/minutesApi';
import { EmotionScoreChart } from '../../features/minutes/ui/EmotionScoreChart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Pencil, Trash2, ArrowLeft } from 'lucide-react';

interface MinutesDetailViewProps {
  meetingId: string;
}

export function MinutesDetailView({ meetingId }: MinutesDetailViewProps) {
  const router = useRouter();
  const [notes, setNotes] = useState<MeetingMinutes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotesByMeeting(meetingId)
      .then(setNotes)
      .catch(() => setNotes([]))
      .finally(() => setLoading(false));
  }, [meetingId]);

  const handleDelete = async (id: string) => {
    if (!confirm('회의록을 삭제하시겠습니까?')) return;
    try {
      await deleteNote(id);
      setNotes((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const scores: EmotionScore[] = notes
    .map((n) => n.emotion_score)
    .filter(Boolean) as EmotionScore[];

  if (loading) return <p className="p-6 text-gray-400">불러오는 중...</p>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl p-6">
        <div className="mb-6 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft size={16} />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">회의록</h1>
        </div>

        {scores.length > 0 && (
          <Card className="mb-6 dark:bg-gray-800">
            <CardHeader>
              <h2 className="text-lg font-semibold">분위기 분석</h2>
            </CardHeader>
            <CardContent>
              <EmotionScoreChart scores={scores} />
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {notes.length === 0 ? (
            <Card className="dark:bg-gray-800">
              <CardContent className="py-8 text-center text-gray-400">
                회의록이 없습니다.
              </CardContent>
            </Card>
          ) : (
            notes.map((note) => (
              <Card key={note.id} className="dark:bg-gray-800">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs text-gray-400">
                        {new Date(note.date).toLocaleString('ko-KR')}
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">
                        {note.content}
                      </p>
                      {note.emotion_score && (
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs text-gray-400">분위기 점수</span>
                          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                            {note.emotion_score.score.toFixed(1)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="ml-4 flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => router.push(`/minutes/${note.id}/edit`)}
                      >
                        <Pencil size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDelete(note.id)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="mt-6">
          <Button
            className="bg-green-500 hover:bg-green-600"
            onClick={() => router.push(`/minutes/${meetingId}/new`)}
          >
            회의록 작성
          </Button>
        </div>
      </div>
    </div>
  );
}
