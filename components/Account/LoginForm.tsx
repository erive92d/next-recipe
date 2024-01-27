"use client"
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginForm() {
    const router = useRouter()
    const [userInput, setUserInput] = useState({
        email: "",
        password: ""
    })


    const [error, setError] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { value, name } = e.currentTarget
        setError(false)
        setUserInput(
            {
                ...userInput,
                [name]: value
            }
        )
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const response = await signIn("credentials", {
            email: userInput.email,
            password: userInput.password,
            redirect: false,
        })


        if (!response?.ok) {
            setError(true)
        }

        if (response?.status === 200) {
            router.refresh()
            router.back()
        }
    }

    return (
        <div className='h-screen flex flex-col '>
            <div className='p-4 border flex flex-col gap-4'>
                <div className=' text-2xl font-bold text-orange-500'>Login</div>
                <div className='flex flex-col gap-2'>
                    <input onChange={handleChange} type="email" name="email" className='input input-bordered bg-white' placeholder='email...' />
                    <input onChange={handleChange} type="password" name="password" className='input  input-bordered bg-white' placeholder='password..' />
                </div>
                <div className='flex gap-2'>
                    <button onClick={handleSubmit} className='btn btn-sm btn-success'>Log In</button>
                    <button className='btn btn-sm btn-info'>
                        <Link href="/signup">
                            Sign Up
                        </Link>
                    </button>

                </div>
            </div>

            {error && <h1 className='btn btn-error'>Invalid Credentials</h1>}
        </div>
    )
}
