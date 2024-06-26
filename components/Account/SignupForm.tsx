"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Label } from '@radix-ui/react-label'
import { Link } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card'

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

        const { email, name, password, validatePass} = inputData

        if(!email || !name || !password || !validatePass) {
            setError("Cannot leave empty inputs")
            return
        }

        if (inputData.password !== inputData.validatePass) {
            setError("Passwords provided doesn't match")
            return
        }

        const response = await fetch(`${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_API_URL : ""}/api/account/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData),
            cache: "no-cache"
        })

        console.log(response, "response")

        if (response.status === 301) {
            setError(response.statusText)
            return
        }

        if (response.ok) {
            const loginUser = await signIn("credentials", {
                email: inputData.email,
                password: inputData.password,
                redirect: false,
            })

            if (!loginUser?.ok) {
                setError("Unable to login")
            }

            if (loginUser?.status === 200) {
                router.refresh()
                router.back()
            }


        }
    }


    return (
        <Card className="w-[350px] mx-auto my-4">
            <CardHeader>
            <CardTitle>Make an account</CardTitle>
            </CardHeader>
            <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input value={inputData.email} onChange={handleChange} name="email" type="email" id="email" placeholder="johndoe@email.com" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input value={inputData.name} onChange={handleChange} name="name" type="name" id="name" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                        <Input value={inputData.password} onChange={handleChange}  name="password" type="password" id="password" placeholder="*******" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                        <Input value={inputData.validatePass} onChange={handleChange} name="validatePass" type="validatePass" id="validatePass" placeholder="*******" />
                    </div>
                </div>
            </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleSubmit} >
                    Submit
                 </Button>
                        {error && <h1 className='text-red-600 px-2 text-sm font-thin'>{error}</h1>}
             </CardFooter>
        </Card>
        // <div>
        //     <h1 className='text-2xl bold text-orange-400 text-center m-4'>Register</h1>
        //     <div className='flex flex-col gap-2 items-center'>
        //         <input value={inputData.email} name="email" type="email" onChange={handleChange} className='input bg-white' placeholder='email...' />
        //         <input value={inputData.name} name="name" type="name" onChange={handleChange} className='input bg-white' placeholder='name...' />
        //         <input value={inputData.password} name="password" type="password" onChange={handleChange} className='input bg-white' placeholder='password...' />
        //         <input value={inputData.validatePass} name="validatePass" type="password" onChange={handleChange} className='input bg-white' placeholder='validate password..' />
        //         <button onClick={handleSubmit} className='btn btn-sm btn-success'>Register</button>
        //         {error && <h1 className=' btn btn-sm btn-error'>{error}</h1>}
        //     </div>
        // </div>
    )
}
