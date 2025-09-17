import dbConnect from "@/lib/mongodb";

export async function GET() {
  try {
    // Connect to DB
    await dbConnect();

    return new Response(
      JSON.stringify({ message: "✅ MongoDB connection successful!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("DB connection error:", error);
    return new Response(
      JSON.stringify({ message: "❌ MongoDB connection failed", error }),
      { status: 500 }
    );
  }
}
