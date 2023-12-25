import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { headers } from 'next/headers'

export default async function grabUserData() {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
        redirect("/auth/login")
    }

    // console.log(session, "session")
    // const headersList = headers();
    // const token = headersList.get("Authorization");
    // const res = await fetch("http://localhost:3000/api/test", {
    //     headers: { Authorization: `Bearer ${token}` }
    // });

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/userdata`, {
            cache:"no-store"
        })
            if(!response.ok) {
            throw new Error("error")
        }

        return await response.json()
    } catch (error) {
        throw new Error("Failed to get user data")
    }

}
