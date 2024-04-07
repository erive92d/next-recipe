"use client"
import { MdOutlineFavorite } from "react-icons/md";

import { RecipeFromDB, RecipeProps } from '@/lib/props'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button } from "../ui/button";
import grabUserData from "@/controllers/grabUserData";

type SaveType = {
  recipe: RecipeProps
}

export default function SaveButton({ recipe }: SaveType) {
  const [isSaved, setIsSaved] = useState<boolean>(false)
  const router = useRouter()
  const session = useSession()
  const currentUser = session?.data?.user

  useEffect(() => {
    const checkIfSaved = async () => {
      const recipes: RecipeFromDB[] = await grabUserData()
      setIsSaved(recipes.some(item => item.id === recipe.idMeal))
    }

    checkIfSaved()
  }, [recipe])

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
      alert("Recipe has been saved")
      router.refresh()
    }

  }

  return (
    <>
      {isSaved ? <Button >Saved</Button>
        :
        <Button variant={"outline"} onClick={handleSave}>
          Save this recipe <MdOutlineFavorite />
        </Button>
      }
    </>
  )


}
