import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET: string = process.env.JWT_SECRET as string;

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const res = await req.json();

  const { token } = res;

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

  await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({ message: "Post deleted" }, { status: 200 });
}
