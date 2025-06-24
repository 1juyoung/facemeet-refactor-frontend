import { Sidebar } from '../entities/meeting/Sidebar';
import { MainDashboard } from '../features/home/ui/main-dashboard';

export default function MainView() {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Sidebar />
      <MainDashboard />
    </main>
  );
}
