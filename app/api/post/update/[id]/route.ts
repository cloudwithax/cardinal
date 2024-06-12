import { prisma } from "@/prisma";
import { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

const JWT_SECRET: string = process.env.JWT_SECRET as string;

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const res = await req.json();

  const { token, content } = res;

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

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  if (post.authorId !== user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      content: content,
    },
  });

  return NextResponse.json({ message: "Post updated" }, { status: 200 });
}
