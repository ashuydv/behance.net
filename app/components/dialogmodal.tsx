import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  type: "blog" | "video" | "image";
};

const DialogModal: React.FC<Props> = ({ isOpen, onClose, type }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadBlog = async (title: string, content: string) => {
    const response = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    if (!response.ok) throw new Error("Failed to upload blog");
    return await response.json();
  };

  const uploadFile = async (
    title: string,
    file: File,
    fileType: "image" | "video"
  ) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    const response = await fetch(`/api/${fileType}`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error(`Failed to upload ${fileType}`);
    return await response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let result;
      switch (type) {
        case "blog":
          result = await uploadBlog(title, content);
          break;
        case "image":
        case "video":
          if (!file) throw new Error("No file selected");
          result = await uploadFile(title, file, type);
          break;
      }
      toast.success(`${type} uploaded successfully!`);
      console.log(result);
      onClose();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(`Failed to upload ${type}. Please try again.`);
    } finally {
      setIsLoading(false);
      setTitle("");
      setContent("");
      setFile(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="mb-4">
          <DialogTitle>
            {type === "blog"
              ? "Create a Blog Post"
              : type === "image"
              ? "Upload an image"
              : "Upload a video"}
          </DialogTitle>
          <DialogDescription>
            Fill in the details below to{" "}
            {type === "blog" ? "create your blog post" : `upload your ${type}`}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          {type === "blog" && (
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
          )}
          {(type === "image" || type === "video") && (
            <div>
              <Label htmlFor="file">Upload {type}</Label>
              <Input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                accept={type === "image" ? "image/*" : "video/*"}
                required
              />
            </div>
          )}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Uploading..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModal;
