"use client"
import useDebounce from '@/helpers/useDebounce'
import { getMealByName } from '@/lib/api'
import { RecipeProps } from '@/lib/props'
import Link from '@/node_modules/next/link'
import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi"
import Featured from './Featured'

export default function InputComp() {

    const [inputText, setInputText] = useState<string>("")
    const [searchResult, setResult] = useState<RecipeProps[] | null>(null)

    const debouncedValue = useDebounce(inputText, 1000)

    useEffect(() => {
        const grabMeal = async () => {
            if (debouncedValue) {
                const res = await getMealByName(debouncedValue)
                if (res) {
                    setResult(res.meals)
                }
            }
        }
        grabMeal()
    }, [debouncedValue])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInputText(e.currentTarget.value)
    }

    return (
        <div className='p-2 text-gray-800'>
            <div className='flex p-4 justify-between text-lg border items-center rounded-lg w-96 mx-auto'>
                <input onChange={handleChange} type="text" className='w-96 focus:outline-none bg-white' placeholder='search for a recipe..' />
                <FiSearch />
            </div>
            {/* <div className='text-center'>
                <input type="text" onChange={handleChange} placeholder='search for a recipe...' className='input input-bordered w-96 bg-white text-black' />
            
            </div> */}
            <div className='px-4 max-h-40 overflow-y-auto w-96 mx-auto'>
                {searchResult && searchResult.map((result) => (
                    <Link href={`/recipe/${result.idMeal}`} key={result.idMeal} className="border-b flex gap-2 items-center">
                        <h1>{result.strMeal} </h1>
                        <span className='badge badge-warning badge-sm text-white'> {result.strArea}</span>

                    </Link>
                ))}
            </div>

        </div>
    )
}
