"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { RecipeProps } from '@/lib/props'
import Link from 'next/link'

interface RecipeDisplayProps {
    recipe: RecipeProps  //temporary
}

export default function RecipeDisplay({recipe}:RecipeDisplayProps) {

    const [tab, setTab] = useState<string>("main")

    const handleTabs = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setTab(e.currentTarget.value)
    }

    console.log(recipe)

    const selectTab = (tab:string) => {
        if(tab === "main") {
            return (
                <div>
                    <div>
                        <Image className='w-full' alt="image" unoptimized width={100} height={100} src={`${recipe.strMealThumb}/preview`} />
                    </div> 
                    <div className='flex flex-col px-2 py-4'>
                        <h1 className='text-2xl font-bold font-serif'>{recipe.strMeal}</h1>
                        <p className='text-lg font-semibold'>{recipe.strArea}</p>
                        <Link className='link text-right' href={recipe.strSource} target='_black'>
                            Source
                        </Link>
                    </div>
                   
                </div>
               
            )
        } 
        if(tab === "ingredients") {
            const arrayIng = []
            for(let i = 1; i < 20; i++) {
                let ing = recipe[`strIngredient${i}`]
                let measure = recipe[`strMeasure${i}`]
                    if(ing !== "" && measure !== "") {
                        let obj = {
                            ingredients: ing,
                            measurement: measure
                        }
                        arrayIng.push(obj)
                    }
                
            }

            
            return (
                <div className='p-2 space-y-4'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr className='font-bold text-black text-lg'>
                                <th>Ingredients</th>
                                <th>Measurement</th>
                            </tr>
                            </thead>
                            <tbody>
                            {arrayIng && arrayIng.map((ing,index) => (
                                    <tr key={index}>                               
                                        <td className='font-semibold'>
                                            {ing.ingredients}  
                                        </td>
                                        <td className='italic font-gray-400'>
                                            {ing.measurement}
                                        </td>
                                    </tr>
                                 
                              ))}
                                <tr>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }

        if(tab === "instructions") {
            return (
                <div>
                    <p className='font-light p-2'>
                    {recipe.strInstructions}

                    </p>
                </div>
            )
        }
    }


    const tabInfo = [
        {
            label: "Main",
            value: "main"
        },
        {
            label: "Ingredients",
            value:"ingredients"
        },
        {
            label: "Instructions",
            value: "instructions"
        }
    ]
  

    return (
        <div className='bg-white p-4 w-96 mx-auto rounded-lg text-black'>
               <div className="tabs tabs-boxed justify-center bg-white">
                    {tabInfo.map(({label, value}, index) => (
                        <button onClick={handleTabs}  className={`tab duration-300 font-bold font   text-black ${tab === value ? "bg-red-500 text-white" : ""}`} key={index} value={value}>
                            {label}
                        </button>
                    ))}
                </div>
                {selectTab(tab)}
        </div>
      )
}


