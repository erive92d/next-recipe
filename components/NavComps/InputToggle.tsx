"use client"
import { FaSearch } from "react-icons/fa";

import useDebounce from '@/helpers/useDebounce'
import { getMealByName } from '@/lib/api'
import { RecipeProps } from '@/lib/props'
import Link from '@/node_modules/next/link'
import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputToggle() {

    const [inputText, setInputText] = useState<string>("")
    const [searchResult, setResult] = useState<RecipeProps[] | null>(null)
    const [error, setError] = useState<string>("")
    const debouncedValue = useDebounce(inputText, 1000)

    useEffect(() => {
        const grabMeal = async () => {
            if (debouncedValue) {
                const res = await getMealByName(debouncedValue)
                if (res.meals) {
                    setResult(res.meals.slice(0, 5))
                } else {
                    setResult(null)
                    setError("No result")
                }
            }
        }
        grabMeal()
    }, [debouncedValue])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (!e.currentTarget.value) {
            setResult(null)
        }
        setError("")
        setInputText(e.currentTarget.value)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"ghost"}>
                    <FaSearch />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Search for a recipe</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            onChange={handleChange}
                            id="link"
                            placeholder="recipe name"
                        />
                    </div>
                </div>
                {error && <h1 className='text-gray-500 italic'>{error}</h1>}
                {searchResult ? searchResult.map((result) => (
                    <div className='bg-white border-b px-4' key={result.idMeal}>
                        <Link href={`/recipe/${result.idMeal}`} className=" flex gap-2 items-center">
                            <h1>{result.strMeal} </h1>
                            <span className='badge badge-warning badge-sm text-white'> {result.strArea}</span>
                        </Link>
                    </div>

                ))
                    :
                    null
                }
            </DialogContent>
        </Dialog>
    )
}
