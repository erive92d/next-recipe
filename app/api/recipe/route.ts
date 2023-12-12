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
    const { id, name, image, user } = await req.json()
    try {
        await dbConnect()

        const recipe = await Recipe.findOne({ id: id })

        if (!recipe) {
            const createRecipe = await Recipe.create({
                id,
                name: name,
                image: image,
                users: user
            })
            await createRecipe.save()

            return NextResponse.json(createRecipe, { status: 200 })
        }
        recipe.users.addToSet(user)

        await recipe.save()

        return NextResponse.json(recipe, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json("Failed to fetch", { status: 500 })
    }

}