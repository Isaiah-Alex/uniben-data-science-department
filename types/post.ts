export type PostStatus = "draft" | "published" | "scheduled" | "archived";

// No PostCategory here — each feature defines its own

export interface AttachedFile {
  name: string;
  size: string;
  type: string;
}

export interface PostFormData<TCategory extends string = string> {
  title: string;
  summary: string;
  body: string;
  category: TCategory | "";
  status: PostStatus;
  publishDate: string;
  coverImage: string | null;
  attachments: AttachedFile[];
  tags: string[];
}

export interface PostFormProps<TCategory extends string = string> {
  mode?: "create" | "edit";
  initialData?: Partial<PostFormData<TCategory>>;
  categories: { label: string; value: TCategory }[];
  onSave: (data: PostFormData<TCategory>) => Promise<void>;
  onPublish: (data: PostFormData<TCategory>) => Promise<void>;
  routeName: string;
}
