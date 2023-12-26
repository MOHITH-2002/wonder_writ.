
import bcrypt from "bcryptjs"
// import connect from "@/utils/connect"
import { NextResponse } from "next/server"
import prisma from "@/utils/connect"
export const POST = async (request)=>{
    try {
    const {username,email,password} = await request.json()
    console.log(username, email, password);
    // await prisma.$connect()
    const name = username;

    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword);
    const comment = await prisma.user.create({
        data: { name,email,password },
      });
  
      console.log(comment);
      return new NextResponse(JSON.stringify(comment, { status: 200 }));
    } catch (error) {
        return new NextResponse(error,{status:500})
    }
}