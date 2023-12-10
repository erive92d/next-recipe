"use client"

import { useRouter } from "@/node_modules/next/navigation"
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} className='btn btn-sm '>
            <IoIosArrowBack />
        </button>
    )
}