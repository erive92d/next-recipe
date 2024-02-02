import dbConnect from '@/lib/db'
import Recipe from '@/lib/models/Recipe'
import User from '@/lib/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import getServerSession from "next-auth"
import { authOptions } from '../auth/[...nextauth]/route'
import { headers } from "next/headers";
import { getToken } from "next-auth/jwt"

export async function GET(req: NextRequest, res: NextResponse) {
    // console.log(req, "request")
    // const session = await getServerSession(authOptions)
    // console.log(session, "@@@@@@@")
    const token = await getToken({ req })

    const userId = token ? token._id : null
    try {
        await dbConnect()
        const recipes = await Recipe.find({ users: userId })
        if (!recipes) {
            console.log("no recipe")
        }
        return new NextResponse(JSON.stringify(recipes), { status: 200 })
    } catch (error) {
        return new NextResponse("Error", { status: 500 })
    }
}