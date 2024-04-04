import dbConnect from "@/lib/db"
import Basket from "@/lib/models/Basket"
import Recipe from "@/lib/models/Recipe"
import { NextRequest, NextResponse } from "@/node_modules/next/server"

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { id, name, image, user } = await req.json()

    try {
        await dbConnect()
        //check if recipe exists
        const recipe = await Recipe.findOne({ id: id })

        if (!recipe) {
            const recipe = new Recipe(
                {
                    id, name, image
                }
            )
            recipe.save()
        }

        const basket = await Basket.findOneAndUpdate(
            { user: user.id },
            { $addToSet: { recipes: recipe._id } },
            { upsert: true }
        )

        if (!basket) {
            const createBasket = await Basket.create(
                {
                    user: user.id
                }
            )
            console.log(createBasket, "@@basket from database")
            return NextResponse.json(createBasket, { status: 200 })

        }

        basket.save()


        return NextResponse.json(basket, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json("Failed to fetch", { status: 500 })
    }

}