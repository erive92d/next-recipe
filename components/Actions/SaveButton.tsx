"use client"

import { RecipeProps } from '@/lib/props'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type SaveType = {
  recipe: RecipeProps
}

export default function SaveButton({ recipe }: SaveType) {
  const router = useRouter()
  const session = useSession()
  const currentUser = session?.data?.user

  if (!session.data) {
    return
  }

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (session.status !== "authenticated") {
      const userConfirm = confirm("Log in required")
      if (userConfirm) {
        router.push("/auth/login")
      }
    }


    const userData = {
      id: recipe.idMeal,
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      user: currentUser
    }


    const response = await fetch(`/api/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-store"
    })

    if (response.ok) {
      alert("Recipe has been saved")
    }

  }

  return (
    <button onClick={handleSave} className='btn btn-sm text-white btn-success'>save</button>
  )
}
