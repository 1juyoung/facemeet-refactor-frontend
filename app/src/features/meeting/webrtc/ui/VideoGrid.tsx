'use client';

import { cn } from '@/lib/utils';
import { VideoTile, type TileModel } from './VideoTile';

interface VideoGridProps {
  tiles: TileModel[];
  /** 크게 보기로 고정한 참가자 id */
  pinnedId: string | null;
  onTogglePin: (id: string) => void;
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

export function VideoGrid({ tiles, pinnedId, onTogglePin }: VideoGridProps) {
  const count = tiles.length;
  const pinned = pinnedId ? tiles.find((t) => t.id === pinnedId) : undefined;
  // 혼자일 때는 크게 볼 대상이 없으므로 더블클릭 비활성
  const canPin = count > 1;

  // 크게 보기: 선택한 사람을 위에 크게, 나머지는 아래 가로 목록으로
  if (pinned) {
    const others = tiles.filter((t) => t.id !== pinned.id);
    return (
      <div className="flex h-full flex-col gap-2 p-2 md:gap-3 md:p-4">
        <VideoTile tile={pinned} pinned onDoubleActivate={() => onTogglePin(pinned.id)} className="flex-1" />
        <div className="flex h-24 shrink-0 gap-2 overflow-x-auto md:h-32 md:gap-3">
          {others.map((tile) => (
            <VideoTile
              key={tile.id}
              tile={tile}
              compact
              onDoubleActivate={() => onTogglePin(tile.id)}
              className="aspect-video h-full shrink-0"
            />
          ))}
        </div>
      </div>
    );
  }

  // 3명일 때 마지막 칸이 비지 않도록 한 명은 두 칸을 차지
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
        <VideoTile
          key={tile.id}
          tile={tile}
          onDoubleActivate={canPin ? () => onTogglePin(tile.id) : undefined}
          className={cn(odd && i === count - 1 && 'col-span-2')}
        />
      ))}
    </div>
  );
}
