import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const JWT_SECRET: string = process.env.JWT_SECRET as string;

export default async function POST(req: NextRequest) {
  const res = await req.json();

  const { username, password } = res;

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  }

  const token = jwt.sign({ username }, JWT_SECRET, {
    expiresIn: "30d",
  });

  return NextResponse.json({ token }, { status: 200 });
}
