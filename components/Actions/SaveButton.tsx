"use client"
import { use } from "react"
import grabSaves from '@/controllers/grabSaves'
import testing from '@/controllers/testing'
import { RecipeProps } from '@/lib/props'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type SaveType = {
  recipe: RecipeProps
}


const getPosts = async () => {
  const saves = await grabSaves()
  return saves
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


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipeapi/saverecipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-store"
    })

    if (response.ok) {
      router.refresh()
      alert("Recipe has been saved")

    }

  }

  const data = use(getPosts())
  console.log(data, "here")

  return (
    <button onClick={handleSave} className='btn btn-sm text-white btn-success'>save</button>
  )
}
