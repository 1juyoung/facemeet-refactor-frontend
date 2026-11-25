'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MeetingMinutes, UpdateMinutesRequest } from '@/app/src/entities/minutes/types';

interface MinutesFormProps {
  initial?: MeetingMinutes;
  onSubmit: (data: { content: string; score: number }) => Promise<void>;
  onCancel?: () => void;
}

export function MinutesForm({ initial, onSubmit, onCancel }: MinutesFormProps) {
  const [content, setContent] = useState(initial?.content ?? '');
  const [score, setScore] = useState<number>(initial?.emotion_score?.score ?? 50);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setError('');
    setLoading(true);
    try {
      await onSubmit({ content: content.trim(), score });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="content">회의록 내용</Label>
        <textarea
          id="content"
          className="min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="회의 내용을 입력하세요..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="score">분위기 점수 (0-100)</Label>
        <div className="flex items-center gap-4">
          <Input
            id="score"
            type="range"
            min={0}
            max={100}
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="flex-1"
          />
          <span className="w-10 text-right font-semibold text-green-600">{score}</span>
        </div>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <div className="flex gap-2">
        <Button
          type="submit"
          className="bg-green-500 hover:bg-green-600"
          disabled={loading || !content.trim()}
        >
          {loading ? '저장 중...' : '저장'}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            취소
          </Button>
        )}
      </div>
    </form>
  );
}
