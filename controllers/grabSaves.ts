
export default async function grabSaves() {

    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/recipeapi/recipesaves`, {
            method: "GET",
            cache: "no-store"
        })
        if (!response.ok) {
            throw new Error("Error")
        }
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}