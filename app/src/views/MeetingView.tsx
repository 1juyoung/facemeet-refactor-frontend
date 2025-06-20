import { Sidebar } from '../entities/meeting/Sidebar';
import PeerConnect from '../features/video/model/PeerConnect';

export default function MeetingView({ meetingId }: { meetingId: string }) {
  return (
    <main>
      <h1>미팅 view {meetingId}</h1>
      <Sidebar />
      <PeerConnect />
    </main>
  );
}
