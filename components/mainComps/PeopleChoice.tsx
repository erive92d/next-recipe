import grabSaves from "@/controllers/grabSaves"
import Image from "@/node_modules/next/image"
import Link from "next/link";
import { MdOutlineFavorite } from "react-icons/md";
import CarouselItems from "./CarouselItems";
import { PeopleChoiceType } from "@/lib/props";



export default async function PeopleChoice() {
    const save: PeopleChoiceType[] = await grabSaves()
    const sortedSaves = save.sort((a, b) => (b.users.length - a.users.length))
    const slicedSave = sortedSaves.slice(0, 10)
    return (
        <div className="min-h-screen ">
            <h1 className="text-2xl font-light py-10">Faves</h1>
            {slicedSave ?
                <CarouselItems items={slicedSave} />
                :
                <h1>Loading</h1>
            }
            {/* {slicedSave ? slicedSave.map((res, index) => (
                <Link href={`/recipe/${res.id}`} key={res.id} className="relative carousel-item flex flex-col items-center text-gray-700 ">
                    <Image className="" src={`${res.image}/preview`} unoptimized height={200} width={200} alt="recipeThumb" />
                    <h1 className="font-bold ">
                        {res.name}
                    </h1>
                    <p className="badge absolute right-0 badge-warning text-white rounded-none">{res.users.length} <MdOutlineFavorite /></p>
                </Link>
            ))
                :
                <h1>Loading</h1>
            } */}
            {/* </div> */}
        </div>
    )

}

