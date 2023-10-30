import { authOptions } from "../auth/[...nextauth]/authOptions";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import useCurrentUser from "@/hooks/useCurrentUser";
import serverAuth from "@/lib/serverAuth";

export async function GET(request: Request) {
  try {
    const { currentUser } = await serverAuth();
    if (!currentUser) throw new Error("Invalid user");
    const favoritedMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });
    return NextResponse.json(favoritedMovies, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
