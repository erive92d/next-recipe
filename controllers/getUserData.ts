import { getCsrfToken } from "next-auth/react"

import { headers } from "next/headers";

export default async function getUserData() {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/userdata/`, {
            method: "GET",
            cache: "no-store",
            headers: headers()

        })

        if (!response.ok) {
            return
        }

        return await response.json()

    } catch (error) {
        console.error(error)
    }
}