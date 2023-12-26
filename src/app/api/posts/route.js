import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";

import { NextResponse } from "next/server";


export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get('cat');

  const query = cat
    ? {
        where: {
          catSlug: cat,
        },
      }
    : {};

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query), // Fetch posts based on the query
      prisma.post.count(query), // Count posts based on the query
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Something error" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};