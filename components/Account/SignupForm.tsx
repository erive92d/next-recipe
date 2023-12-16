"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
interface SignupProps {
    email: string,
    name: string,
    password: string,
    validatePass: string
}


export default function SignupForm() {
    const [error, setError] = useState<string>("")
    const router = useRouter()

    const [inputData, setInputData] = useState<SignupProps>({
        email: "",
        name: "",
        password: "",
        validatePass: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.currentTarget
        setError("")
        setInputData({
            ...inputData,
            [name]: value
        })
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (inputData.password !== inputData.validatePass) {
            setError("Passwords provided doesn't match")
            return
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/account/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData),
            cache: "no-cache"
        })

        if (response.status === 301) {
            setError(response.statusText)
            return
        }

        if (response.ok) {
            router.push("/")
        }
    }


    return (
        <div>
            <h1 className='text-2xl bold text-orange-400 text-center m-4'>Register</h1>
            <div className='flex flex-col gap-2 items-center'>
                <input value={inputData.email} name="email" type="email" onChange={handleChange} className='input bg-white' placeholder='email...' />
                <input value={inputData.name} name="name" type="name" onChange={handleChange} className='input bg-white' placeholder='name...' />
                <input value={inputData.password} name="password" type="password" onChange={handleChange} className='input bg-white' placeholder='password...' />
                <input value={inputData.validatePass} name="validatePass" type="password" onChange={handleChange} className='input bg-white' placeholder='validate password..' />
                <button onClick={handleSubmit} className='btn btn-sm btn-success'>Register</button>
                {error && <h1 className=' btn btn-sm btn-error'>{error}</h1>}
            </div>
        </div>
    )
}
