import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
    include: { author: true },
  });

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post, { status: 200 });
}
