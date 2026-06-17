import { seedActivity, seedDashboardStats, seedSiteSummary } from "@/db/seed";
import { DashboardShell } from "../../_components/DashboardShell";

export default function DashboardPage() {
  return (
    <DashboardShell
      stats={seedDashboardStats}
      activity={seedActivity}
      summary={seedSiteSummary}
    />
  );
}
