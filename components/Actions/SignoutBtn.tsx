"use client"
import { signOut } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function SignoutBtn() {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => signOut({ redirect: false }).then(() => { router.refresh() })} className='btn btn-error btn-sm'>Log out</button>
    </div>
  )
}
