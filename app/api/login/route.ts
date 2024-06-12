import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { prisma } from "@/prisma";

const JWT_SECRET = process.env.JWT_SECRET;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { username, password } = req.body;

  const user = prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (username === "admin" && password === "password") {
    // Generate JWT token
    const token = jwt.sign(
      { username, password },
      process.env.JWT_SECRET as string
    );

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export default handler;
