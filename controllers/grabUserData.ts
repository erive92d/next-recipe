import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { headers } from 'next/headers'

export default async function grabUserData() {

    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/userdata`, {
            cache: "no-store",
            headers: headers()
        })

        if (!response.ok) {
            throw new Error("error")
        }

        return await response.json()
    } catch (error) {
        throw new Error("Failed to get user data")
    }

}
