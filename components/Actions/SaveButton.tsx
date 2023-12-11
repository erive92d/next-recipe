"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type SaveType = {
  recipeId: string
}

export default function SaveButton({ recipeId }: SaveType) {
  const router = useRouter()
  const session = useSession()

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (session.status === "unauthenticated") {
      const userConfirm = confirm("Log in required")
      if (userConfirm) {
        router.push("/auth/login")
      }
    }

    const userData = {
      id: recipeId,
      user: session.data.user.id
    }

    const response = await fetch(`/api/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-store"
    })

    console.log(response)

    if (response.ok) {
      alert("Recipe has been saved")
    }



  }

  return (
    <button onClick={handleSave} className='btn btn-sm text-white btn-success'>save</button>
  )
}
