import BackButton from "@/components/Actions/BackButton"
import { redirect } from "@/node_modules/next/navigation"
import { getServerSession } from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route"
import grabUserData from "@/controllers/grabUserData"
import Recipe from "@/lib/models/Recipe"


export default async function Profile() {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
        redirect("/auth/login")
    }

    const userBasket = session.basket
  
   
    return (
        <div className="flex flex-col">
            <div className="flex justify-between bg-white p-2">
                <BackButton />
                <h1 className="">Profile</h1>
            </div>
            <div>
                <h1>Hello {session.user.name}</h1>
                <div>
                    {userBasket.recipes.map((recip,index) => (
                        <div key={index}>
                            <h1>{recip.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}