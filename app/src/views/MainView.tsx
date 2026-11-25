import { AppShell } from '../shared/ui/AppShell';
import { MainDashboard } from '../features/home/ui/main-dashboard';

export default function MainView() {
  return (
    <AppShell>
      <MainDashboard />
    </AppShell>
  );
}
