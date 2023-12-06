
import { getRecipeByArea } from "@/lib/api"
import { ItemsProps } from "@/lib/props"
interface RecipeProps {
    meals: ItemsProps[]
}



export default async function Suggestions(area:string) {
    
    const {meals}:RecipeProps = await getRecipeByArea(area)
    console.log(meals)
    
    return (
        <div>
            {meals && meals.map((meal) => (
                <div key={meal.idMeal}>
                    <h1>{meal.strMeal}</h1>
                </div>
            ))}
        </div>
    )
}