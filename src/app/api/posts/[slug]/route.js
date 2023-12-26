import prisma from "@/utils/connect";

import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    const {slug} = params;
   
    try{

        const post = await prisma.post.findUnique({
            where:{slug:slug},
            include:{user:true}
        })
        return new NextResponse(
            JSON.stringify(post, { status: 200 })
            );
    }
    catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Something error" }, { status: 500 })
            );
        }
    };
    
// Single post fetching
