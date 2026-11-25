'use client';

import { cn } from '@/lib/utils';
import { VideoTile, type TileModel } from './VideoTile';

interface VideoGridProps {
  tiles: TileModel[];
}

/**
 * 인원 수에 따라 배치를 바꾼다.
 * 1명: 화면 가득 / 2명: 좌우 (모바일은 위아래) / 3~4명: 2×2 / 5~6명: 3×2 / 7~9명: 3×3 / 그 이상: 4열 + 스크롤
 */
function layoutFor(count: number) {
  if (count <= 1) return 'grid-cols-1 grid-rows-1';
  if (count === 2) return 'grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-none md:content-center';
  if (count <= 4) return 'grid-cols-2 grid-rows-2';
  if (count <= 6) return 'grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2';
  if (count <= 9) return 'grid-cols-2 auto-rows-[minmax(140px,1fr)] md:grid-cols-3 md:grid-rows-3';
  return 'grid-cols-2 auto-rows-[minmax(140px,1fr)] md:grid-cols-4 md:auto-rows-[minmax(180px,1fr)]';
}

export function VideoGrid({ tiles }: VideoGridProps) {
  const count = tiles.length;
  // 3명일 때 마지막 칸이 비지 않도록 한 명은 두 칸을 차지 (모바일 2열 기준)
  const odd = count === 3;

  return (
    <div
      className={cn(
        'grid h-full gap-2 p-2 md:gap-3 md:p-4',
        count <= 1 && 'mx-auto max-w-5xl',
        count === 2 && 'md:mx-auto md:max-w-6xl md:[&>*]:aspect-video',
        layoutFor(count),
        count > 6 && 'overflow-y-auto'
      )}
    >
      {tiles.map((tile, i) => (
        <VideoTile key={tile.id} tile={tile} className={cn(odd && i === count - 1 && 'col-span-2 md:col-span-2')} />
      ))}
    </div>
  );
}
