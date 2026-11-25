'use client';

import { useEffect, useState } from 'react';
import { getProfile } from '../api/userApi';
import { User } from '../types';

type Status = 'loading' | 'authenticated' | 'guest';

// 같은 화면에서 여러 컴포넌트가 호출해도 프로필 요청은 한 번만 보낸다
let pending: Promise<User> | null = null;

export function resetCurrentUserCache() {
  pending = null;
}

/** 로그인한 사용자 정보. 토큰이 없거나 만료되면 guest 상태가 된다. */
export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    let cancelled = false;
    if (!pending) {
      pending = getProfile();
      pending.catch(() => {
        pending = null;
      });
    }
    pending
      .then((u) => {
        if (cancelled) return;
        setUser(u);
        setStatus('authenticated');
      })
      .catch(() => {
        if (cancelled) return;
        setUser(null);
        setStatus('guest');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { user, status };
}
