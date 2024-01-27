"use client"

import { useRouter } from "@/node_modules/next/navigation"

export default function JoinUsBtn() {
    const router = useRouter()
    return (
        <button onClick={() => router.push("/login")} className='btn btn-sm btn-info text-gray-200'>Join us!</button>
    )
}