import BackButton from "@/components/Actions/BackButton"
import MealAmount from "@/helpers/amountMeal"
import CategoryLogo from "@/helpers/categoryLogo"
import { getCategories } from "@/lib/api"
import { CatProps } from "@/lib/props"
import Link from "@/node_modules/next/link"

export default async function page() {
    const res = await getCategories()
    const { meals }: CatProps = res

    return (
        <div className="space-y-8 py-8">
            <ul className="flex flex-wrap">
                {meals.map((cat, index) => (
                    <li className="w-2/6 p-2 font-thin" key={index}>
                        <Link className="font-bold text-gray-700 shadow p-2 rounded flex flex-col items-center" href={`/items/${cat.strCategory}`} >
                            <span className="text-3xl ">
                                <CategoryLogo categoryName={cat.strCategory} />
                            </span>
                            <p> {cat.strCategory}</p>
                            <MealAmount cat={cat.strCategory} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}