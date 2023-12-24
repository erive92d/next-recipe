import BackButton from "@/components/Actions/BackButton"
import ProfileComp from "@/components/ProfileComp"
import { redirect } from "@/node_modules/next/navigation"
import { getServerSession } from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route"
import Image from "@/node_modules/next/image"

export default async function Profile() {

    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/auth/login")
    }

    console.log(session, "sss")

    return (
        <div className="flex flex-col">
            <div className="flex justify-between bg-white p-2">
                <BackButton />
                <h1 className="btn btn-primary btn-sm">Profile</h1>
            </div>
            <div className="flex flex-col ">
                <h1 className="text-center text-2xl">Hello {session?.user?.name}</h1>
                {/* <ProfileComp /> */}
                <div>
                    Recipes saved
                    <ul className=" divide-y-2 ">
                        {session?.recipes?.map((recip, index) => (
                            <li className="py-2 flex gap-2" key={index}>
                                <Image src={`${recip.image}/preview`} unoptimized height={100} width={100} alt="recipe pic" />
                                <h1>{recip.name}</h1>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}