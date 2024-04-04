"use client"
import { MdOutlineFavorite } from "react-icons/md";

import { RecipeProps } from '@/lib/props'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ValidateSaveBtn from "@/helpers/ValidateSaveBtn";
import { Button } from "../ui/button";

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


    const response = await fetch(`${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_API_URL : ""}/api/recipeapi/saverecipe`, {
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

  return <Button variant={"outline"} onClick={handleSave}>
    Save this recipe <MdOutlineFavorite />
  </Button>
}
