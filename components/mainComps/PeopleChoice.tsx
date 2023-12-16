import grabSaves from "@/controllers/grabSaves"

type PeopleChoiceType = {
    id: string,
    name: string,
    image: string,
    users: string[],

}

export default async function PeopleChoice() {
    const save: PeopleChoiceType[] = await grabSaves()

    return (
        <div className="p-2 bg-white h-20 overflow-scroll">
            {save ? save.map((res) => (
                <div key={res.id} className="flex justify-between">
                    <h1>{res.name}</h1>
                    <p>{res.users.length} saves</p>
                </div>
            ))
                :
                <h1>Loading</h1>
            }
        </div>
    )

}

