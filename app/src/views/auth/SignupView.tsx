import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SignupForm } from '../../features/auth/ui/SignupForm';

export function SignupView() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">FaceMeet</h1>
          <p className="text-sm text-gray-500">새 계정을 만드세요</p>
        </CardHeader>
        <CardContent>
          <SignupForm />
          <p className="mt-4 text-center text-sm text-gray-500">
            이미 계정이 있으신가요?{' '}
            <Link href="/login" className="text-green-600 hover:underline">
              로그인
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
