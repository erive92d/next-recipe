import { getRandomMeal } from "@/lib/api"
import Image from "next/image"
import { RecipeProps } from "@/lib/props"
import Link from "next/link"


export default async function RandomRecipe() {

  const recipe: RecipeProps = await getRandomMeal()
  return (
    <div className="flex flex-col w-96 mx-auto gap-2 items-center px-2 py-6 shadow-gray-400  shadow-xl">

      <h1 className="text-lg text-gray-600 p-2">{recipe.strMeal}</h1>
      <Image className="w-96 mx-auto rounded-lg" src={`${recipe.strMealThumb}/preview`} unoptimized height={100} width={100} alt="recipeThumb" />
      {/* <h1 className="bg-green-500 p-2 rounded-lg">{recipe.strCategory}</h1> */}
      <button className="btn btn-accent btn-sm text-white">
        <Link href={`/recipe/${recipe.idMeal}`} >
          View recipe
        </Link>
      </button>
    </div>


  )
}
