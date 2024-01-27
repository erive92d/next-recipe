import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import SignoutBtn from '@/components/Actions/SignoutBtn'

export default async function page() {

  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/auth/login")
  }
  return (
    <div>
      <h1>Welcome {session?.user?.name}</h1>
      <SignoutBtn />
    </div>
  )
}
