import grabSaves from "@/controllers/grabSaves"
import Image from "@/node_modules/next/image"
import Link from "next/link";
import { MdOutlineFavorite } from "react-icons/md";

type PeopleChoiceType = {
    id: string,
    name: string,
    image: string,
    users: string[],

}

export default async function PeopleChoice() {
    const save: PeopleChoiceType[] = await grabSaves()
    const sortedSaves = save.sort((a, b) => (b.users.length - a.users.length))
    const slicedSave = sortedSaves.slice(0, 5)
    return (
        <div>
            <div className="carousel carousel-center max-w-md lg:max-w-full px-2 space-x-2 ">
                {/* <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                </div> */}
                {/* <div className="carousel-item"> */}
                {slicedSave ? slicedSave.map((res, index) => (
                    <Link href={`/recipe/${res.id}`}key={res.id} className="relative carousel-item flex flex-col items-center text-gray-700 ">
                        <Image className="" src={`${res.image}/preview`} unoptimized height={200} width={200} alt="recipeThumb" />
                        <h1 className="font-bold ">
                            {res.name}
                        </h1>
                        <p className="badge absolute right-0 badge-warning text-white rounded-none">{res.users.length} <MdOutlineFavorite/></p>
                    </Link>
                ))
                    :
                    <h1>Loading</h1>
                }
                {/* </div> */}
            </div>
        </div>
    )

}

