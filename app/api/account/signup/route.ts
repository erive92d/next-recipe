import dbConnect from '@/lib/db'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from "bcrypt"

export async function POST(req: NextRequest, res:NextResponse) {
    const {email, name, password} = await req.json()

    const hashedPassword = await bcrypt.hash(password, 10)
  
    const newUser = {
        email: email,
        name: name,
        password: hashedPassword
    }

    try {
      await dbConnect()
      const user = await User.findOne({email: newUser.email})
        if(user) {
            return new NextResponse("Error", {status: 301, statusText:"User email exists"})
        }

        const createUser = new User(newUser)
        console.log(createUser)
        createUser.save()

        return new NextResponse(JSON .stringify(createUser), {status:200})
    } catch (error) {
      return new NextResponse("Error", {status: 500})
   }
}