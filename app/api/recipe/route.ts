import dbConnect from "@/lib/db";
import Recipe from "@/lib/models/Recipe";
import { NextRequest, NextResponse } from "@/node_modules/next/server";

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        await dbConnect()
        const recipes = await Recipe.find({})

        return NextResponse.json(recipes, { status: 200 })

    } catch (error) {
        return NextResponse.json("Failed to fetch", { status: 500 })
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const { id, user } = await req.json()

    try {
        await dbConnect()
        const recipe = await Recipe.findOneAndUpdate(
            { id: id },
            { addToSet: { users: user } },
            { new: true }
        )
        if (!recipe) {
            const createRecipe = await Recipe.create({
                id, users: user
            })
            return NextResponse.json(createRecipe, { status: 200 })
        }
        return NextResponse.json(recipe, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json("Failed to fetch", { status: 500 })
    }

}