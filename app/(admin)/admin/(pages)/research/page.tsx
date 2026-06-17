import { seedResearchAreas } from "@/db/seed";
import { ResearchShell } from "../../_components/ResearchShell";

export default function ResearchPage() {
  return <ResearchShell initialAreas={seedResearchAreas} />;
}
