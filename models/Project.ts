import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ["blog", "image", "video"], required: true },
  content: { type: String }, // For blog posts
  images: [{ type: String }], // For image projects and blog post images
  videoUrl: { type: String }, // For video projects
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  categories: [{ type: String }],
  tags: [{ type: String }],
  appreciations: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
