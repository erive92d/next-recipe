import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
    const recipeId = req.nextUrl.searchParams.get("id")
    const userEmail = req.nextUrl.searchParams.get("user")


    try {
        await dbConnect()
        // const recipes = await Recipe.findOne({})
        const recipes = await Recipe.find({}).populate('users')
        console.log(recipes)

        if (!recipes) {
            console.log("no recipe")
        }
        return new NextResponse(JSON.stringify(recipes), { status: 200 })
    } catch (error) {
        return new NextResponse("Error", { status: 500 })
    }
}