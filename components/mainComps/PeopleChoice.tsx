import { getRecipeById } from "@/lib/api"

type PeopleChoiceType = {
    id: string,
    name: string,
    image: string,
    users: string[],

}

async function grabSaves() {
    const response = await fetch(`http://localhost:3000/api/recipe`, {
        cache: "no-store"
    })

    const save: PeopleChoiceType[] = await response.json()
    return save
}

export default async function PeopleChoice() {
    const save = await grabSaves()

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

