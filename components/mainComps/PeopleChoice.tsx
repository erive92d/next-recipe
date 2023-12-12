import { getRecipeById } from "@/lib/api"

type PeopleChoiceType = {
    id: string,
    name: string,
    image: string,
    users: string[],

}

export default async function PeopleChoice() {

    const saves = await fetch("http://localhost:3000/api/recipe", {
        cache: "no-store"
    })
    const response: PeopleChoiceType[] = await saves.json()

    return (
        <div className="p-2 bg-white">
            {response.map((res) => (
                <div key={res.id} className="flex justify-between">
                    <h1>{res.name}</h1>
                    <p>{res.users.length} saves</p>
                </div>
            ))}
        </div>
    )
}

