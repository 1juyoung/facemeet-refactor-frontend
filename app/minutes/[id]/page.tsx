import { MinutesDetailView } from '@/app/src/views/minutes/MinutesDetailView';

interface MinutesPageProps {
  params: Promise<{ id: string }>;
}

export default async function MinutesPage({ params }: MinutesPageProps) {
  const { id } = await params;
  return <MinutesDetailView meetingId={id} />;
}
