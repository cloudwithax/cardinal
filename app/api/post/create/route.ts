import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET: string = process.env.JWT_SECRET as string;

export default async function POST(req: NextRequest) {
  const res = await req.json();

  const { token, title, content, media } = res;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload;

  if (!decodedToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: {
      username: decodedToken.username,
    },
  });

  await prisma.post.create({
    data: {
      title: title,
      content: content,
      media: media,
      author: {
        connect: {
          id: user?.id,
        },
      },
    },
  });

  return NextResponse.json({ message: "Post created" }, { status: 200 });
}
