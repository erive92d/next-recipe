"use client"
import useDebounce from '@/helpers/useDebounce'
import { getMealByName } from '@/lib/api'
import { RecipeProps } from '@/lib/props'
import Link from '@/node_modules/next/link'
import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi"

export default function InputComp() {

    const [inputText, setInputText] = useState<string>("")
    const [searchResult, setResult] = useState<RecipeProps[] | null>(null)
    const [error, setError] = useState<string>("")
    const debouncedValue = useDebounce(inputText, 1000)

    useEffect(() => {
        const grabMeal = async () => {
            if (debouncedValue) {
                const res = await getMealByName(debouncedValue)
                if (res.meals) {
                    setResult(res.meals.slice(0, 2))
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
        <div className='p-2 text-gray-800 flex flex-col'>
            <div className='flex shadow-lg p-4 justify-between bg-white text-lg border items-center rounded-md w-96 mx-auto'>
                <input value={inputText} onChange={handleChange} type="text" className='w-96 focus:outline-none bg-white' placeholder='search for a recipe..' />
                <FiSearch />
            </div>
            <div className='px-2 max-h-40 overflow-y-auto w-full mx-auto'>
                {error && <h1 className='text-gray-500 italic'>{error}</h1>}
                {searchResult ? searchResult.map((result) => (
                    <div className='bg-white px-3 border-b' key={result.idMeal}>
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
