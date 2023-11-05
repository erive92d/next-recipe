"use client"
import useDebounce from '@/helpers/useDebounce'
import { getMealByName } from '@/lib/api'
import { RecipeProps } from '@/lib/props'
import React, { useEffect, useState } from 'react'

export default function InputComp() {

    const [inputText, setInputText] = useState<string>("")
    const [searchResult, setResult] = useState<RecipeProps[] | null>(null)

    const debouncedValue  = useDebounce(inputText, 1000)

    useEffect(() => {
        const grabMeal = async () => {
            if(debouncedValue) {
                const res = await getMealByName(debouncedValue)
                if(res) {
                    setResult(res)
                }
            }
            
        }

        grabMeal()
    }, [debouncedValue])

    console.log(searchResult)



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInputText(e.currentTarget.value)
    }

  return (
    <div className='text-center p-2'>
        <input type="text" onChange={handleChange} placeholder='search for a recipe...' className='input mx-auto input-bordered w-96 bg-white text-black' />
    </div>
  )
}
