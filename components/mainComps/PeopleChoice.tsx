import { getRecipeById } from "@/lib/api"
import serverUrl from "@/lib/serverUrl"
type PeopleChoiceType = {
    id: string,
    name: string,
    image: string,
    users: string[],

}

async function grabSaves() {
    try {
        const response = await fetch(`${serverUrl}/api/recipe`, {
            cache: "no-store"
        })

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
            {save.map((res) => (
                <div key={res.id} className="flex justify-between">
                    <h1>{res.name}</h1>
                    <p>{res.users.length} saves</p>
                </div>
            ))}
        </div>
    )

}

