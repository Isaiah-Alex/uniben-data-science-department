import { Badge } from "@/components/ui/badge";
import { NewsStatus } from "./types";

interface NewsStatusBadgeProps {
  status: NewsStatus;
}

const config: Record<
  NewsStatus,
  {
    label: string;
    variant: "default" | "secondary" | "outline" | "destructive";
  }
> = {
  published: { label: "Published", variant: "default" },
  scheduled: { label: "Scheduled", variant: "secondary" },
  draft: { label: "Draft", variant: "outline" },
  archived: { label: "Archived", variant: "outline" },
};

export function NewsStatusBadge({ status }: NewsStatusBadgeProps) {
  const { label, variant } = config[status];
  return (
    <Badge variant={variant} className="capitalize text-xs font-medium">
      {label}
    </Badge>
  );
}
