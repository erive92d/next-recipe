export default async function PeopleChoice() {

    const saves = await fetch("http://localhost:3000/api/recipe", {
        cache: "no-store"
    })
    const response = await saves.json()
    console.log(response)
    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}