import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LoginForm } from '../../features/auth/ui/LoginForm';

export function LoginView() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">FaceMeet</h1>
          <p className="text-sm text-gray-500">계정에 로그인하세요</p>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <p className="mt-4 text-center text-sm text-gray-500">
            계정이 없으신가요?{' '}
            <Link href="/sign-up" className="text-green-600 hover:underline">
              회원가입
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
