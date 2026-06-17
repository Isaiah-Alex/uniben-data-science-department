import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { News } from "./types";
import { NewsStatusBadge } from "./NewsStatusBadge";
import { NewsRowActions } from "./NewsRowActions";
import { EmptyNewsState } from "./EmptyNewsState";

interface NewsTableProps {
  posts: News[];
  loading?: boolean;
}

export function NewsTable({ posts, loading = false }: NewsTableProps) {
  if (loading) {
    return (
      <div className="border border-border">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="w-20">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden lg:table-cell">Published</TableHead>
              <TableHead className="hidden lg:table-cell">Updated</TableHead>
              <TableHead className="w-12.5" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className="border-border">
                <TableCell>
                  <Skeleton className="w-16 h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-48" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Skeleton className="h-4 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-20 rounded-full" />
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Skeleton className="h-4 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-8" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (posts.length === 0) {
    return <EmptyNewsState />;
  }

  return (
    <div className="border border-border">
      <Table>
        <TableHeader>
          <TableRow className="border-border bg-muted/50 hover:bg-muted/50">
            <TableHead className="w-20 text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Image
            </TableHead>
            <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Title
            </TableHead>
            <TableHead className="hidden md:table-cell text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Category
            </TableHead>
            <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Status
            </TableHead>
            <TableHead className="hidden lg:table-cell text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Published
            </TableHead>
            <TableHead className="hidden lg:table-cell text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Updated
            </TableHead>
            <TableHead className="w-12.5" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.id}
              className="border-border hover:bg-muted/30 transition-colors"
            >
              {/* Thumbnail */}
              <TableCell>
                <div className="relative w-16 h-10 bg-muted overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              </TableCell>

              {/* Title */}
              <TableCell>
                <p
                  className="font-medium text-foreground text-sm leading-snug line-clamp-2 max-w-xs"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {post.title}
                </p>
              </TableCell>

              {/* Category */}
              <TableCell className="hidden md:table-cell">
                <span className="text-xs font-medium text-muted-foreground capitalize px-2 py-1 bg-accent">
                  {post.category}
                </span>
              </TableCell>

              {/* Status */}
              <TableCell>
                <NewsStatusBadge status={post.status} />
              </TableCell>

              {/* Published */}
              <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                {post.publishedAt}
              </TableCell>

              {/* Updated */}
              <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                {post.updatedAt}
              </TableCell>

              {/* Actions */}
              <TableCell>
                <NewsRowActions post={post} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
