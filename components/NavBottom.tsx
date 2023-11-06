"use client"

import React from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { PiCookingPot } from "react-icons/pi"
import { BsBookmarkCheck } from "react-icons/bs"
import { useRouter } from 'next/navigation'

export default function NavBottom() {
    const router = useRouter()

    const handleDestination = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push(`/${e.currentTarget.name}`)
    }



    return (
        <div className='fixed bottom-0 bg-white text-black w-full lg:hidden md:hidden'>
            <div className='flex justify-around py-2 px-6'>
                <button name="/" onClick={handleDestination} className='btn btn-sm btn-ghost'>
                    <AiOutlineHome size={25} />
                </button>
                <button name="recipe" onClick={handleDestination} className='btn btn-sm btn-ghost'>
                    <PiCookingPot size={25} />
                </button>
                <button name="saves" onClick={handleDestination} className='btn btn-sm btn-ghost'>
                    <BsBookmarkCheck size={18} />
                </button>
            </div>
        </div>
    )
}
