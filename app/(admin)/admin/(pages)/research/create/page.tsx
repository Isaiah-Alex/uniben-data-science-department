"use client";

import type { Metadata } from "next";
import { PostForm } from "@/components/admin/PostForm";
import { PostFormData } from "@/types/post";

type researchCategory = "research track" | "career change" | "research";
export default function CreatePostPage() {
  const categories = [
    { label: "Research Track", value: "research track" as researchCategory },
    { label: "Career Change", value: "career change" as researchCategory },
    { label: "Research", value: "research" as researchCategory },
  ];

  const savePost = async (data: PostFormData<researchCategory>) => {
    console.log("Saving post...", data);
  };

  const publishPost = async (data: PostFormData<researchCategory>) => {
    console.log("Publishing post...", data);
  };

  return (
    <PostForm
      mode="create"
      categories={categories}
      onSave={savePost}
      onPublish={publishPost}
      routeName="research"
    />
  );
}
