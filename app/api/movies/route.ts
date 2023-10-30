import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(request: Request) {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return NextResponse.redirect("/auth");
  try {
    const movies = await prismadb.movie.findMany();
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
