import { getRandomMeal } from "@/lib/api"
import Image from "next/image"
import { RecipeProps } from "@/lib/props"
import Link from "next/link"


export default async function RandomRecipe() {

  const recipe: RecipeProps = await getRandomMeal()

  return (
    <div className="bg-white relative lg:flex-col flex gap-2">
      <Image className="lg:w-96 lg:mx-auto" src={`${recipe.strMealThumb}/preview`} unoptimized height={200} width={200} alt="recipeThumb" />
      {/* <h1 className="bg-green-500 p-2 rounded-lg">{recipe.strCategory}</h1> */}
      <div className="flex flex-col gap-4 px-2">
        <h1 className="text-lg text-gray-600">{recipe.strMeal}</h1>
        <ul className="italic  text-sm">
          <li>{recipe.strArea}</li>
          <li>{recipe.strCategory} </li>
          <li>{recipe.strTags}</li>
        </ul>
        <div className="absolute bottom-0 right-0">
          <button className="btn btn-ghost rounded-none bottom-0 bg-orange-500 btn-sm text-white">
            <Link href={`/recipe/${recipe.idMeal}`} >
              View recipe
            </Link>
          </button>
        </div>
      </div>

    </div>


  )
}
