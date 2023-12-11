"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

type SaveType = {
  recipeId: string
}

export default function SaveButton({ recipeId }: SaveType) {
  const router = useRouter()
  const session = useSession()

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()




  }

  return (
    <button onClick={handleSave} className='btn btn-sm text-white btn-success'>save</button>
  )
}
