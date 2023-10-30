import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import prismadb from "@/lib/prismadb";

export async function GET(request: Request) {
  try {
    const { user } = (await getServerSession(authOptions)) || {};
    if (!user) return NextResponse.redirect("/auth");
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    return NextResponse.json(randomMovies[0], { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
