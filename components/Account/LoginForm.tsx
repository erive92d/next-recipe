"use client"
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


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
        <Card className="w-[350px] mx-auto my-4">
            <CardHeader>
            <CardTitle>Log In to your Account</CardTitle>
            </CardHeader>
            <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={handleChange} name="email" type="email" id="email" placeholder="johndoe@email.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                    <Input onChange={handleChange} name="password" type="password" id="password" placeholder="*******" />
                </div>
                </div>
            </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handleSubmit}  variant="outline">Login</Button>
                <Button>
                <Link href="/auth/signup">
                                    Sign Up
                        </Link>
                        </Button>
                        {error && <h1 className='btn btn-error'>Invalid Credentials</h1>}
             </CardFooter>
        </Card>
    )
}
