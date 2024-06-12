import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export default async function POST(req: NextRequest) {
  const res = await req.json();

  const { username, password, email } = res;

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (user) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 401 }
    );
  }

  const emailExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (emailExists) {
    return NextResponse.json(
      { message: "Email already exists" },
      { status: 401 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      username: username,
      password: hashedPassword,
      email: email,
    },
  });

  return NextResponse.json({ message: "User created" }, { status: 200 });
}
