import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center gap-2">
        <div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">FaceMeet</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">표정분석 화상회의</p>
        </div>
      </div>
    </Link>
  );
}
