import { getRandomMeal } from "@/lib/api"
import Image from "next/image"
import { ItemsProps } from "@/lib/props"
import Link from "next/link"


export default async function RandomRecipe() {
    
  const recipe:ItemsProps = await getRandomMeal()

  return (
    <div className="flex bg-white border w-96  mx-auto my-4">
        <div className="w-1/2">
          <Image className="w-full" src={`${recipe.strMealThumb}/preview`} unoptimized height={100} width={100} alt="recipeThumb" />
        </div>
        <div className="w-1/2 text-center">
          <h1 className="text-lg  p-2">{recipe.strMeal}</h1>
          <button className="btn btn-warning btn-sm text-white">
            <Link href={`/recipe/${recipe.idMeal}`} >
              View recipe
            </Link>
          </button>
        </div>

    </div>
  )
}
