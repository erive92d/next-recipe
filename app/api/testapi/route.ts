import dbConnect from '@/lib/db'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res:NextResponse) {
    try {
      await dbConnect()
      const users = await User.find({})
      if(!users) {
         console.log("no user")
      }
    
    
      return new NextResponse(JSON.stringify(users), {status:200})
    } catch (error) {
      return new NextResponse("Error", {status: 500})
   }
}