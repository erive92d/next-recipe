"use client"

import { useEffect, useState } from "react"
import { useSession } from 'next-auth/react'

export default function ProfileComp() {
    const [userData, setUserData] = useState(null)
    const session = useSession()
    // useEffect(() => {

    // })
    return (
        <h1>Hello {session?.data?.user?.name}</h1>
    )
}