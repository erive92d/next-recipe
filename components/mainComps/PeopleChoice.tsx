import grabSaves from "@/controllers/grabSaves"
import Image from "@/node_modules/next/image"
import Link from "next/link";
import { PeopleChoiceType } from "@/lib/props";


export default async function PeopleChoice() {
    const save: PeopleChoiceType[] = await grabSaves()
    const sortedSaves = save?.sort((a, b) => (b.users.length - a.users.length))
    const slicedSave = sortedSaves.slice(0, 4)
    return (
        <div className="border-b py-14">
            <h1 className="text-2xl font-bold py-10 px-2 text-center">Trending</h1>
            <div className="flex flex-col items-center justify-center md:flex-row lg:flex-row gap-2 px-2">
                {slicedSave ?
                    slicedSave.map((item, index) => (
                        <div key={index}>
                            <Image className={`rounded-lg`} src={`${item.image}/preview`} unoptimized height={300} width={300} alt="recipeThumb" />
                            <Link href={`/recipe/${item.id}`}
                                className=' text-center text-black'>{item.name}
                            </Link>
                        </div>
                    ))
                    :
                    <h1>Loading</h1>
                }
            </div>

        </div>
    )

}

