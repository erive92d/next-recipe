import { searchByCategory } from "@/lib/api"

type MealAmountType = {
    cat: string
}

export default async function MealAmount({ cat }: MealAmountType): Promise<JSX.Element | undefined> {
    if (cat) {
        const res = await searchByCategory(cat)
        const amountPerCategory = res.meals.length

        return (
            <h1 className="text-sm font-light text-gray-400 italic">
                {amountPerCategory} meals
            </h1>
        )
    }


}
