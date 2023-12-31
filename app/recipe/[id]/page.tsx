

import RecipeDisplay from '@/components/RecipeDisplay'
import { getRecipeById } from '@/lib/api'
import { RecipeProps } from '@/lib/props'
import React from 'react'

interface ParamProps {
    params: {
        id: string
    }
}

async function getRecipe(id: string) {
    const recipe = await getRecipeById(id)
    return recipe
}


export default async function page({ params: { id } }: ParamProps) {
    const { meals } = await getRecipe(id)
    const recipe: RecipeProps = meals[0]

    if (!recipe) return <h1>Loading..</h1>

    return <RecipeDisplay recipe={recipe} />
}
