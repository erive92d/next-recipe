"use client"

import { useRouter } from "@/node_modules/next/navigation"

export default function GoToProfile() {
    const router = useRouter()

    return (
        <button onClick={() => router.push("/profile")} className='btn btn-ghost btn-sm'>Profile</button>
    )
}