

import RecipeDisplay from '@/components/RecipeDisplay'
import { getRecipeById } from '@/lib/api'
import { RecipeProps } from '@/lib/props'
import Image from 'next/image'
import React from 'react'

interface ParamProps {
    params: {
        id:string
    }
}


export default async function page({params: {id}}:ParamProps) {

    const { meals } = await getRecipeById(id)
    const recipe:RecipeProps = meals[0]

    if(!recipe) return <h1>Loading..</h1>
    
    return <RecipeDisplay recipe={recipe} />
}
