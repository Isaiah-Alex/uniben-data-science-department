"use client";

import { PostForm } from "@/components/admin/PostForm";
import type { PostFormData } from "@/types/post";

type ProgramCategory = "program";

export default function CreateProgramPage() {
  const categories = [
    { label: "Program", value: "program" as ProgramCategory },
  ];

  const savePost = async (data: PostFormData<ProgramCategory>) => {
    console.log("Saving post...", data);
  };

  const publishPost = async (data: PostFormData<ProgramCategory>) => {
    console.log("Publishing post...", data);
  };

  return (
    <PostForm
      mode="create"
      categories={categories}
      onSave={savePost}
      onPublish={publishPost}
      routeName="programs"
    />
  );
}
