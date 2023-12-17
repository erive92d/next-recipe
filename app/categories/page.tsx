import BackButton from "@/components/Actions/BackButton"
import MealAmount from "@/helpers/amountMeal"
import { getCategories } from "@/lib/api"
import { CatProps } from "@/lib/props"
import Link from "@/node_modules/next/link"

export default async function page() {
    const res = await getCategories()
    const { meals }: CatProps = res

    return (
        <div className="">
            <div className="flex px-4 border-b-2 justify-between items-center">
                <BackButton />

                <h1 className="font-bold text-2xl text-center">Categories </h1>
            </div>
            <ul className="">
                {meals.map((cat, index) => (
                    <li className="border-b flex gap-2 items-center py-4 px-2 font-thin" key={index}>
                        <Link className="" href={`/items/${cat.strCategory}`} >
                            {cat.strCategory}
                        </Link>
                        <MealAmount cat={cat.strCategory} />
                    </li>
                ))}
            </ul>
        </div>
    )
}