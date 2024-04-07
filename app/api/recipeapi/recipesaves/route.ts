import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export async function GET(req: NextRequest, res: NextRequest) {


    try {
        await dbConnect()
        const recipes = await Recipe.find()

        if (!recipes) {
            throw new Error("No recipe found")
        }

        // console.log(recipes, "saved")
        return new NextResponse(JSON.stringify(recipes), { status: 200 })
    } catch (error) {
        return new NextResponse("Error", { status: 500 })
    }
}