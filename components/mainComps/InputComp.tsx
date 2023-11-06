"use client"
import useDebounce from '@/helpers/useDebounce'
import { getMealByName } from '@/lib/api'
import { RecipeProps } from '@/lib/props'
import React, { useEffect, useState } from 'react'

export default function InputComp() {

    const [inputText, setInputText] = useState<string>("")
    const [searchResult, setResult] = useState<RecipeProps[] | null>(null)

    const debouncedValue = useDebounce(inputText, 2000)

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
        <div className='p-2'>
            <div className='text-center'>
                <input type="text" onChange={handleChange} placeholder='search for a recipe...' className='input input-bordered w-96 bg-white text-black' />
            </div>
            <div className=' max-h-40 overflow-y-auto w-96 mx-auto'>
                {searchResult && searchResult.map((result) => (
                    <div key={result.idMeal}>
                        <h1>{result.strMeal}</h1>
                    </div>
                ))}
            </div>

        </div>
    )
}
