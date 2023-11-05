"use client"
import Link from 'next/link'
import React from 'react'
import {useState} from "react"
import { FiSearch } from "react-icons/fi"

export default function Navigation() {
  const [showInput, setShowInput] = useState<boolean>(false)


  return (
   <div className='bg-transparent text-gray-700  p-4 space-y-2'>
        <div className='flex items-center justify-between text-2xl'>
          <Link href="/">
            <h1 className='bg-red-700 text-gray-100 p-1 rounded-tr-lg rounded-bl-lg'>Next Recipe</h1>
          </Link>
          <div className='flex gap-2'> 
            <div className={`${showInput ? "opacity-100 " : "opacity-0"}  transition-all ease-in duration-200 `} >
              <input type="text" className=' input w-full input-sm input-ghost bg-transparent input-bordered ' />
            </div>
            <button onClick={() => setShowInput(!showInput)}>
                <FiSearch />
            </button>
          </div>
        </div>
   </div>     
  )
}
