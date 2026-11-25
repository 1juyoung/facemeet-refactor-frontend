'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutGrid, LogIn, LogOut, User as UserIcon, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import { clearToken } from '@/app/src/shared/api/client';
import { resetCurrentUserCache, useCurrentUser } from '@/app/src/entities/user/model/useCurrentUser';

const NAV_ITEMS = [
  { href: '/', label: '대시보드', icon: LayoutGrid },
  { href: '/profile', label: '프로필', icon: UserIcon },
];

export function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 px-2.5 text-base font-extrabold tracking-tight text-ink">
      <span className="grid size-7 place-items-center rounded-lg bg-brand text-white">
        <Video size={15} />
      </span>
      <span>
        Face<span className="text-brand">Meet</span>
      </span>
    </Link>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <span className="grid size-8 place-items-center rounded-full bg-brand text-xs font-bold text-white">
      {name.slice(0, 1)}
    </span>
  );
}

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, status } = useCurrentUser();

  const handleLogout = () => {
    clearToken();
    resetCurrentUserCache();
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen bg-surface text-ink">
      {/* 사이드바 (태블릿 이상) */}
      <aside className="hidden w-56 shrink-0 flex-col border-r border-line bg-white px-3 py-5 md:flex">
        <div className="mb-6">
          <BrandLogo />
        </div>
        <nav className="flex flex-col gap-0.5">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-sm font-semibold transition-colors',
                  active ? 'bg-brand-50 text-brand-600' : 'text-ink-sub hover:bg-line-soft'
                )}
              >
                <Icon size={17} />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto">
          {status === 'authenticated' && (
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-sm font-semibold text-ink-sub hover:bg-line-soft"
            >
              <LogOut size={17} />
              로그아웃
            </button>
          )}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* 상단바 */}
        <header className="flex h-14 items-center gap-3 border-b border-line bg-white px-4 md:px-6">
          <div className="md:hidden">
            <BrandLogo />
          </div>
          <div className="ml-auto flex items-center gap-3">
            {status === 'authenticated' && user ? (
              <Link href="/profile" className="flex items-center gap-2 text-sm font-semibold">
                <Avatar name={user.nickname} />
                <span className="hidden sm:inline">{user.nickname}</span>
              </Link>
            ) : status === 'guest' ? (
              <Link
                href="/login"
                className="flex items-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-sm font-bold text-white hover:bg-brand-600"
              >
                <LogIn size={15} />
                로그인
              </Link>
            ) : (
              <span className="size-8 animate-pulse rounded-full bg-line-soft" />
            )}
          </div>
        </header>

        <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
      </div>
    </div>
  );
}
