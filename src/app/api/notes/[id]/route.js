import dbConnect from "@/lib/mongodb";
import Note from "@/models/Note";

// GET one note
export async function GET(req, { params }) {
  const { id } = await params;
  try {
    await dbConnect();
    const note = await Note.findById(id);
    if (!note) return Response.json({ error: "Note not found" }, { status: 404 });
    return Response.json(note, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch note" }, { status: 500 });
  }
}

// UPDATE note
export async function PUT(req, { params }) {
  const { id } = await params;
  try {
    await dbConnect();
    const body = await req.json();
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title: body.title, content: body.content },
      { new: true, runValidators: true }
    );
    if (!updatedNote) return Response.json({ error: "Note not found" }, { status: 404 });
    return Response.json(updatedNote, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to update note" }, { status: 500 });
  }
}

// DELETE note
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    await dbConnect();
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) return Response.json({ error: "Note not found" }, { status: 404 });
    return Response.json({ message: "Note deleted successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to delete note" }, { status: 500 });
  }
}
