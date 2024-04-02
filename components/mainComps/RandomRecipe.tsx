import { getRandomMeal } from "@/lib/api"
import Image from "next/image"
import { RecipeProps } from "@/lib/props"
import Link from "next/link"


export default async function RandomRecipe() {

  const recipe: RecipeProps = await getRandomMeal()

  return (
    <div className="min-h-screen bg-white relative flex flex-col gap-2 justify-center items-center">
      <Image className="" src={`${recipe.strMealThumb}/preview`} unoptimized height={500} width={500} alt="recipeThumb" />
      {/* <h1 className="bg-green-500 p-2 rounded-lg">{recipe.strCategory}</h1> */}
      <div className="text-2xl font-thin italic flex flex-col gap-4 px-2">
        <Link href={`/recipe/${recipe.idMeal}`} >
          {recipe.strMeal}
        </Link>
      </div>
    </div>


  )
}
