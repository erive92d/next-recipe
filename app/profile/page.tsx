import BackButton from "@/components/Actions/BackButton"
import { redirect } from "@/node_modules/next/navigation"
import { getServerSession } from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route"


export default async function Profile() {

    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect("/auth/login")
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between bg-white p-2">
                <BackButton />
                <h1 className="btn btn-primary btn-sm">Profile</h1>
            </div>
            <div>
                <h1>{session.user.name}</h1>
            </div>
        </div>
    )
}