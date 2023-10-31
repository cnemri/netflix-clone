import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(
  request: Request,
  { params }: { params: { movieId: string } }
) {
  try {
    await serverAuth();
    const { movieId } = params;
    if (typeof movieId !== "string") {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
    if (!movieId) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }
    const movie = await prismadb.movie.findUnique({
      where: { id: movieId },
    });
    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }
    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
