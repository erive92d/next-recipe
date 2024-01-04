"use client"
import { MdOutlineFavorite } from "react-icons/md";

import { RecipeProps } from '@/lib/props'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ValidateSaveBtn from "@/helpers/ValidateSaveBtn";

type SaveType = {
  recipe: RecipeProps
}

// export function ValidateSaveBtn(recipeId:string,) {



// }

export default function SaveButton({ recipe }: SaveType) {
  const router = useRouter()
  const session = useSession()
  const currentUser = session?.data?.user

  // useEffect(() => {
  //   const test = () => {
  //     fetch(`/api/recipeapi/validatesave/?id=${recipe.idMeal}&user=${currentUser?.email}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //   }

  //   test()
  // },[recipe])

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


    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipeapi/saverecipe`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    //   cache: "no-store"
    // })

     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipeapi/savetobasket`, {
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

  return (
    <div>
      <button onClick={handleSave} className='btn btn-sm text-white btn-success'>
        <MdOutlineFavorite/>
      </button>
    </div>

  )
}
