import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
    // const response = req.nextUrl.searchParams.get("userId")
    // console.log(response,"@@@")
    try {
        await dbConnect()
        const recipes = await Recipe.find({})
        if (!recipes) {
            throw new Error("No recipe found")
        }
        return new NextResponse(JSON.stringify(recipes), { status: 200 })
    } catch (error) {
        return new NextResponse("Error", { status: 500 })
    }
}