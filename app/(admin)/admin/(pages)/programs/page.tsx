import { seedPrograms } from "@/db/seed";
import { ProgramsShell } from "../../_components/ProgramsShell";

export default function ProgramsPage() {
  return <ProgramsShell initialPrograms={seedPrograms} />;
}
