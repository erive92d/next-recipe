import { getRecipeById } from "@/lib/api"
import serverUrl from "@/lib/serverUrl"
type PeopleChoiceType = {
    id: string,
    name: string,
    image: string,
    users: string[],

}

async function grabSaves() {
    console.log(serverUrl)
    try {
        const response = await fetch(`${serverUrl}/api/getrecipe`, {
            cache: "no-store"
        })
        console.log(response, "response")
        const save: PeopleChoiceType[] = await response.json()
        return save
    } catch (error) {
        console.error(error)
    }
}

export default async function PeopleChoice() {
    const save = await grabSaves()
    if (!save) return <h1>loading...</h1>

    return (
        <div className="p-2 bg-white">
            {/* test */}
            {save.map((res) => (
                <div key={res.id} className="flex justify-between">
                    <h1>{res.name}</h1>
                    <p>{res.users.length} saves</p>
                </div>
            ))}
        </div>
    )

}

