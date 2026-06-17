"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  Eye,
  Pencil,
  Copy,
  Archive,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DeletePostDialog } from "./DeletePostDialog";
import { News } from "./types";

interface NewsRowActionsProps {
  post: News;
}

export function NewsRowActions({ post }: NewsRowActionsProps) {
  const [deleteOpen, setDeleteOpen] = useState(false);

  function handleDelete() {
    // wire up delete action here
    setDeleteOpen(false);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-muted-foreground hover:text-foreground"
          >
            <MoreHorizontal className="w-4 h-4" />
            <span className="sr-only">Open actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44 rounded-none">
          <DropdownMenuItem className="gap-2 text-sm cursor-pointer">
            <Eye className="w-4 h-4" />
            Preview
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-sm cursor-pointer">
            <Pencil className="w-4 h-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-sm cursor-pointer">
            <Copy className="w-4 h-4" />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-sm cursor-pointer">
            <Archive className="w-4 h-4" />
            Archive
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="gap-2 text-sm cursor-pointer text-destructive focus:text-destructive"
            onClick={() => setDeleteOpen(true)}
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeletePostDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onConfirm={handleDelete}
        title={post.title}
      />
    </>
  );
}
