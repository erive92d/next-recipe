import serverUrl from "@/lib/serverUrl"

export default async function grabSaves() {
    try {
        const response = await fetch(`${serverUrl}/api/recipeapi/recipesaves`, {
            method: "GET",
            next: { revalidate: 2 }
        })
        return await response.json()

    } catch (error) {
        console.error(error)
    }
}