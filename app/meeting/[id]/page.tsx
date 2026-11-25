import MeetingRoomView from '@/app/src/views/MeetingRoomView';

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

export default async function MeetingPage({ params }: MeetingPageProps) {
  const { id } = await params;
  return <MeetingRoomView meetingId={id} />;
}
