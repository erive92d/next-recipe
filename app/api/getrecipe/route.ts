import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: Request, res: Response) {
    try {
        await dbConnect()
        const recipes = await Recipe.find()
        if (!recipes) {
            console.log("no recipe")
        }
        return new Response(JSON.stringify(recipes), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to fetch" }), {
            status: 500,
        })
        // return new NextResponse("Error", { status: 500 })
    }
}