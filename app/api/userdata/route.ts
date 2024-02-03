import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

export interface DefaultUser {
    user: {
        name?: string | null
        email?: string | null
        image?: string | null
        _id?: string | null   
    }
  
  }

export async function GET(req: NextRequest, res: NextResponse) {

    const session:DefaultUser | null = await getServerSession(authOptions)

    if(!session?.user) {
        return new NextResponse("Need to be logged in", { status: 401 })
    }


    const userId = session.user._id

    try {
        await dbConnect()
        // const recipes = await Recipe.findOne({})
        const recipes = await Recipe.find({users:userId})
        console.log(recipes)
        
        if (!recipes) {
            console.log("no recipe")
        }
        return new NextResponse(JSON.stringify(recipes), { status: 200 })
    } catch (error) {
        return new NextResponse("Error", { status: 500 })
    }
}