"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import { useState } from "react"
import SignoutBtn from '../Actions/SignoutBtn'
import { useRouter } from 'next/navigation'
import { FaSearch } from "react-icons/fa";
import InputComp from './InputComp'



export default function Navigation() {
  const router = useRouter()
  const session = useSession()

  const [showInput, setShowInput] = useState<boolean>(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    e.preventDefault()
    setShowInput(!showInput)
  }

  return (
    <div className="navbar bg-orange-500 text-lg lg:p-10 lg:text-xl text-gray-100">
      <div className="navbar-start">
        <a className="px-2 text-white ">Eat-O</a>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div> */}
      <div className="navbar-end gap-4">
        {showInput ?
          <div className='bg-white flex justify-between rounded px-2 items-center text-gray-700'>
            {/* <input type="text" className="input input-sm input-ghost bg-white outline-none focus:outline-none px-2" /> */}
            <InputComp handleClick={handleClick} />

          </div>

          :
          <>
            <button onClick={handleClick}>
              <FaSearch />
            </button>
            {/* <SearchComp /> */}
            {session.data ?
              <>
                <div className="dropdown dropdown-left">
                  <div tabIndex={0} role="button" className=" ">
                    <h1>Hello {session?.data?.user?.name}</h1>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                    <li>
                      <button onClick={() => router.push("/profile")} className='text-black btn btn-sm btn-info'>Profile</button>
                    </li>
                    <li>
                      <SignoutBtn />
                    </li>
                  </ul>
                </div>
              </>
              :
              <button onClick={() => router.push("/auth/login")} className='btn btn-sm btn-info text-gray-200'>Join us!</button>
            }

          </>

        }

      </div>
    </div>
  )
}
