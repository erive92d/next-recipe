"use client"
import useDebounce from '@/helpers/useDebounce'
import { getMealByName } from '@/lib/api'
import { RecipeProps } from '@/lib/props'
import Link from '@/node_modules/next/link'
import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

interface InputProp {
    handleClick: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
}

export default function InputComp({ handleClick }: InputProp) {

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
        <div className='relative'>
            <div className="flex">
                <input onChange={handleChange} type="text" className="input input-sm input-ghost bg-white outline-none focus:outline-none px-2" />
                <button onClick={handleClick}>
                    <IoIosCloseCircleOutline />
                </button>
            </div>
            <div className='absolute z-10 text-sm shadow-lg'>
                {error && <h1 className='text-gray-500 italic'>{error}</h1>}
                {searchResult ? searchResult.map((result) => (
                    <div onClick={handleClick} className='bg-white border-b px-4' key={result.idMeal}>
                        <Link href={`/recipe/${result.idMeal}`} className=" flex gap-2 items-center">
                            <h1>{result.strMeal} </h1>
                            <span className='badge badge-warning badge-sm text-white'> {result.strArea}</span>
                        </Link>
                    </div>

                ))
                    :
                    null
                }
            </div>
        </div>
    )
}
