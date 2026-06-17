import { Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyNewsState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 border border-border bg-muted/30 text-center px-4">
      <div className="w-12 h-12 bg-accent flex items-center justify-center mb-6">
        <Newspaper className="w-6 h-6 text-primary" />
      </div>
      <h3
        className="text-xl font-semibold text-foreground mb-2"
        style={{ fontFamily: "Playfair Display" }}
      >
        No posts yet
      </h3>
      <p className="text-sm text-muted-foreground mb-8 max-w-xs leading-relaxed">
        Start publishing updates, announcements, and news for the department.
      </p>
      <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-6">
        Create First Post
      </Button>
    </div>
  );
}
