import serverUrl from "@/lib/serverUrl"

export default async function grabSaves() {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipeapi/recipesaves`, {
            method: "GET",
            cache: "no-store"
        })
        return await response.json()

    } catch (error) {
        console.error(error)
    }
}