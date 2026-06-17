"use client";

import type { Metadata } from "next";
import { PostForm } from "@/components/admin/PostForm";
import { PostFormData } from "@/types/post";

type NewsCategory =
  | "achievement"
  | "research"
  | "partnership"
  | "event"
  | "curriculum"
  | "alumni";
export default function CreatePostPage() {
  const categories = [
    { label: "Achievement", value: "achievement" as NewsCategory },
    { label: "Research", value: "research" as NewsCategory },
    { label: "Partnership", value: "partnership" as NewsCategory },
    { label: "Event", value: "event" as NewsCategory },
    { label: "Curriculum", value: "curriculum" as NewsCategory },
    { label: "Alumni", value: "alumni" as NewsCategory },
  ];

  const savePost = async (data: PostFormData<NewsCategory>) => {
    console.log("Saving post...", data);
  };

  const publishPost = async (data: PostFormData<NewsCategory>) => {
    console.log("Publishing post...", data);
  };

  return (
    <PostForm
      mode="create"
      categories={categories}
      onSave={savePost}
      onPublish={publishPost}
      routeName="news"
    />
  );
}
