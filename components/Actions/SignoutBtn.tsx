"use client"
import { signOut } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export default function SignoutBtn() {
  const router = useRouter()
  return (
    <div>
      <Button variant="outline" onClick={() => signOut({ redirect: false }).then(() => { router.refresh() })}>Log out</Button>
    </div>
  )
}
