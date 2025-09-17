import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      default: "",
    },
  },
  { timestamps: true } 
);

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
