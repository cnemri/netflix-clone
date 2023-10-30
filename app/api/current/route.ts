import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { currentUser } = await serverAuth();
    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Could not get current user" },
      { status: 500 }
    );
  }
}
