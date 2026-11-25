import { Sidebar } from '../entities/meeting/Sidebar';
import MeetingRoomView from './MeetingRoomView';

interface MeetingViewProps {
  meetingId: string;
}

export default function MeetingView({ meetingId }: MeetingViewProps) {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <MeetingRoomView meetingId={meetingId} />
    </main>
  );
}
