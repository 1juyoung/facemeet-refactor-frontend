'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { User } from '@/app/src/entities/user/types';
import { getProfile, updateProfile } from '@/app/src/entities/user/api/userApi';
import { ArrowLeft } from 'lucide-react';

export function ProfileView() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getProfile()
      .then((u) => {
        setUser(u);
        setNickname(u.nickname);
      })
      .catch(() => setError('프로필을 불러올 수 없습니다. 로그인이 필요합니다.'))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    setError('');
    try {
      const updated = await updateProfile({
        nickname: nickname !== user?.nickname ? nickname : undefined,
        password: password || undefined,
      });
      setUser(updated);
      setPassword('');
      setMessage('프로필이 업데이트되었습니다.');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-6 text-gray-400">불러오는 중...</p>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-lg p-6">
        <div className="mb-6 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft size={16} />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">내 프로필</h1>
        </div>

        <Card className="dark:bg-gray-800">
          <CardHeader>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nickname">닉네임</Label>
                <Input
                  id="nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="닉네임"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">새 비밀번호 (변경 시만 입력)</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="새 비밀번호"
                />
              </div>
              {message && <p className="text-sm text-green-500">{message}</p>}
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600"
                disabled={saving}
              >
                {saving ? '저장 중...' : '저장'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
