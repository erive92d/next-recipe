import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        await dbConnect()
        // const recipes = await Recipe.findOne({})
        const recipes = await Recipe.find({})
        
        if (!recipes) {
            console.log("no recipe")
        }
        return new NextResponse(JSON.stringify(recipes), { status: 200 })
    } catch (error) {
        return new NextResponse("Error", { status: 500 })
    }
}