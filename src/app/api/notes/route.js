import dbConnect from "@/lib/mongodb";
import Note from "@/models/Note";

// GET all notes
export async function GET() {
  try {
    await dbConnect();
    const notes = await Note.find({});
    return Response.json(notes, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch notes" }, { status: 500 });
  }
}

// POST new note
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    if (!body.title || body.title.trim() === "") {
      return Response.json({ error: "Title is required" }, { status: 400 });
    }

    const newNote = await Note.create({
      title: body.title,
      content: body.content || "",
    });

    return Response.json(newNote, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Failed to create note" }, { status: 500 });
  }
}
