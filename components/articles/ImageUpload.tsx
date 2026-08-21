"use client";

import { useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImagePlus, X, Loader2, AlertCircle } from "lucide-react";

interface Props {
  value: string; // current image URL (empty string if none)
  onChange: (url: string) => void;
  userId: string;
  label?: string;
}

const MAX_SIZE_MB = 8;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export function ImageUpload({
  value,
  onChange,
  userId,
  label = "Cover Image",
}: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError("Please choose a JPEG, PNG, WebP, or GIF image.");
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`Image must be under ${MAX_SIZE_MB}MB.`);
      return;
    }

    setUploading(true);
    const supabase = createClient();

    const ext = file.name.split(".").pop();
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const path = `${userId}/${safeName}`;

    const { error: uploadError } = await supabase.storage
      .from("article-images")
      .upload(path, file, { cacheControl: "3600", upsert: false });

    if (uploadError) {
      setError(uploadError.message);
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("article-images")
      .getPublicUrl(path);

    onChange(publicUrlData.publicUrl);
    setUploading(false);
  };

  const handleRemove = () => {
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-2">
      <Label className="font-semibold text-sm">{label}</Label>

      {value ? (
        <div className="relative aspect-video max-h-56 overflow-hidden rounded border border-border group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="Cover preview"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors"
            aria-label="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label
          htmlFor="image-upload-input"
          className="flex flex-col items-center justify-center gap-2 aspect-video max-h-56 border-2 border-dashed border-border rounded cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-colors"
        >
          {uploading ? (
            <>
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
              <span className="text-xs text-muted-foreground">
                Uploading...
              </span>
            </>
          ) : (
            <>
              <ImagePlus className="w-6 h-6 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Click to choose an image
              </span>
              <span className="text-[10px] text-muted-foreground/70">
                JPEG, PNG, WebP or GIF · up to {MAX_SIZE_MB}MB
              </span>
            </>
          )}
        </label>
      )}

      <input
        ref={inputRef}
        id="image-upload-input"
        type="file"
        accept={ACCEPTED_TYPES.join(",")}
        onChange={handleFileSelect}
        disabled={uploading}
        className="hidden"
      />

      {error && (
        <div className="flex items-center gap-1.5 text-xs text-rose-600">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </div>
      )}

      {!value && !uploading && (
        <p className="text-[11px] text-muted-foreground">
          Leave empty to use a default placeholder cover image.
        </p>
      )}
    </div>
  );
}
