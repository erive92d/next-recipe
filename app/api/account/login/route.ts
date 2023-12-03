import dbConnect from '@/lib/db'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from "bcrypt"

export async function POST(req: NextRequest, res:NextResponse) {
    const {email, password} = await req.json()
    try {
      await dbConnect()
      const user = await User.findOne({email})

      if(!user) {
        return new NextResponse("Email not found", {status: 502})
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch) {
            return new NextResponse("Wrong Password", {status: 501, statusText:"Wrong Password"})

        }

      return new NextResponse(JSON.stringify(user), {status:200})
    } catch (error) {
      return new NextResponse("Error", {status: 500})
   }
}