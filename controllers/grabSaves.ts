
export default async function grabSaves() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipeapi/recipesaves`, {
            method: "GET",
            next: { revalidate: 5 }
        })
        return await response.json()

    } catch (error) {
        console.error(error)
    }
}