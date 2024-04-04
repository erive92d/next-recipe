export default async function grabUserData() {

    try {
        const response = await fetch(`/api/userdata`, {
            cache: "no-store",
        })

        if (!response.ok) {
            throw new Error("error")
        }

        return await response.json()
    } catch (error) {
        console.error(error)
    }

}
