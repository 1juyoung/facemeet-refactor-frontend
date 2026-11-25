'use client';

import { EmotionScore } from '@/app/src/entities/minutes/types';

interface EmotionScoreChartProps {
  scores: EmotionScore[];
}

function getScoreColor(score: number): string {
  if (score >= 70) return 'bg-green-400';
  if (score >= 40) return 'bg-yellow-400';
  return 'bg-red-400';
}

function getScoreLabel(score: number): string {
  if (score >= 70) return '긍정적';
  if (score >= 40) return '중립';
  return '부정적';
}

export function EmotionScoreChart({ scores }: EmotionScoreChartProps) {
  if (scores.length === 0) {
    return <p className="text-sm text-gray-400">감정 점수 데이터가 없습니다.</p>;
  }

  const avg = scores.reduce((sum, s) => sum + s.score, 0) / scores.length;

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <p className="text-sm text-gray-500">평균 감정 점수</p>
        <p className="text-3xl font-bold text-green-500">{avg.toFixed(1)}</p>
        <p className="text-sm text-gray-400">{getScoreLabel(avg)}</p>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">시간별 감정 변화</p>
        {scores.map((score, idx) => (
          <div key={score.id} className="flex items-center gap-3">
            <span className="w-6 text-right text-xs text-gray-400">{idx + 1}</span>
            <div className="flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className={`h-5 rounded-full transition-all ${getScoreColor(score.score)}`}
                style={{ width: `${Math.min(score.score, 100)}%` }}
              />
            </div>
            <span className="w-12 text-right text-xs font-medium text-gray-600 dark:text-gray-400">
              {score.score.toFixed(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
