"use client"

import { useRouter } from "@/node_modules/next/navigation"

export default function JoinUsBtn() {
    const router = useRouter()
    return (
        <button onClick={() => router.push("/auth/login")} className=''>Log in/Sign up</button>

    )
}