import { searchByCategory } from "@/lib/api"

export default async function mealAmount(cat: string) {
    if (cat) {
        const res = await searchByCategory(cat)
        const amountPerCategory = res.meals.length
        return amountPerCategory
    }


}
