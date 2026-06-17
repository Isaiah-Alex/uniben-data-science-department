import { seedLecturers } from "@/db/seed";
import { LecturersShell } from "../../_components/LecturersShell";

export default function LecturersPage() {
  return <LecturersShell initialLecturers={seedLecturers} />;
}
