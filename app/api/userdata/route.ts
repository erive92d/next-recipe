import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

interface User {
    user: {
        _id: string;
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    }

}

export async function GET(req: NextRequest, res: NextResponse) {

    const session: any = await getServerSession(authOptions)
    const userId = session?.user?._id

    try {
        await dbConnect()
        // const recipes = await Recipe.findOne({})
        const recipes = await Recipe.find({ users: userId })
        // console.log(recipes, "@@")

        if (!recipes) {
            return new NextResponse("No recipe found", { status: 400 })
        }
        return new NextResponse(JSON.stringify(recipes), { status: 200 })
    } catch (error) {
        return new NextResponse("Error", { status: 500 })
    }
}