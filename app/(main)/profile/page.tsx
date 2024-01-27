import BackButton from "@/components/Actions/BackButton"
import ProfileComp from "@/components/ProfileComp"
import { redirect } from "@/node_modules/next/navigation"
import { getServerSession } from 'next-auth'
import { authOptions } from "../../api/auth/[...nextauth]/route"
import Image from "@/node_modules/next/image"
import grabSaves from "@/controllers/grabSaves"
import getUserData from "@/controllers/getUserData"

export default async function Profile() {

    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/auth/login")
    }

    const recipeSaved = await getUserData()
    console.log(recipeSaved, "response")

    return (
        <div className="flex flex-col">
            <div className="flex justify-between bg-white p-2">
                <BackButton />
                <h1 className="">Profile</h1>
            </div>
            <div className="flex flex-col ">
                <h1 className="text-center text-2xl">Hello {session?.user?.name}</h1>
                {/* <ProfileComp /> */}
                <div>
                    {recipeSaved &&
                        <div>
                            {recipeSaved.map((recip, index) => (
                                <div key={index}>
                                    <h1>{recip.name}</h1>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}