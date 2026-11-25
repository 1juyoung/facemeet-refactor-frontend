import { MinutesEditView } from '@/app/src/views/minutes/MinutesEditView';

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default async function MinutesEditPage({ params }: EditPageProps) {
  const { id } = await params;
  // /minutes/[id]/edit → noteId가 id인 경우와 meetingId인 경우를 구분
  // URL: /minutes/{noteId}/edit 형태로 사용
  return <MinutesEditView noteId={id} />;
}
