
export default async function grabSaves(email: string | null) {
    console.log(email, "GSDGSDG")

    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/recipeapi/recipesaves?email=${email ? email : null}`, {
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