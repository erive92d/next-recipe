"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import SignoutBtn from './SignoutBtn'
import { useRouter } from 'next/navigation'
export default function Navigation() {
  const router = useRouter()
  const session = useSession()

  return (
    <div className="navbar bg-green-500 text-gray-200">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">eat-o</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        {session.data ?
          <>
            <div className="dropdown dropdown-left">
              <div tabIndex={0} role="button" className=" lg:hidden">
                <h1>Hello {session?.data?.user?.name}</h1>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                <li>
                  <button onClick={() => router.push("/profile")} className='btn btn-ghost btn-sm'>Profile</button>
                </li>
                <li>
                  <SignoutBtn />
                </li>
              </ul>
            </div>
          </>
          :
          <button onClick={() => router.push("/auth/login")} className='btn btn-sm btn-accent'>Join us!</button>
        }
      </div>
    </div>
  )
}
