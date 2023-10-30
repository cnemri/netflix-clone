import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser)
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
