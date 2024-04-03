"use client"

import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import { ItemsProps, RecipeProps } from '@/lib/props'
import Link from 'next/link'

import BackButton from './Actions/BackButton'
import SaveButton from './Actions/SaveButton'

interface RecipeDisplayProps {
    recipe: RecipeProps | any //temporary
}

export default function RecipeDisplay({ recipe }: RecipeDisplayProps) {

    console.log(recipe, "@@")

    const arrayIng = []
    for (let i = 1; i < 20; i++) {
        let ing = recipe[`strIngredient${i}`]
        let measure = recipe[`strMeasure${i}`]
        if (ing !== "" && measure !== "") {
            let obj = {
                ingredients: ing,
                measurement: measure
            }
            arrayIng.push(obj)
        }

    }

    return (
        <div className='min-h-screen gap-6 flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center py-4'>
                <h1 className='text-3xl font-light'>{recipe.strMeal}</h1>
                <div className='flex gap-2 font-thin'>
                    <p>{recipe.strArea}</p>
                    <p>{recipe.strTags}</p>
                </div>
            </div>
            <div className='w-4/5 space-y-4'>
                <div className='max-h-96 flex'>
                    <div className='bg-gray-100 px-10 flex-grow py-4 space-y-4 overflow-auto'>
                        <h1 className='text-lg font-bold py-4'>Ingredients</h1>
                        {arrayIng && arrayIng.map((ing, index) => (
                            <div className='divide-x-4' key={index}>
                                <span className='font-thin'>
                                    {ing.ingredients}
                                </span>
                                <span className='font-light italic font-gray-400'>
                                    {ing.measurement}
                                </span>
                            </div>

                        ))}
                    </div>
                    <Image className='' alt="image" unoptimized width={400} height={400} src={`${recipe.strMealThumb}/preview`} />
                </div>
                <div className='bg-gray-100 px-8 py-4'>
                    <h1 className='font-bold'>Instruction</h1>
                    <p className=' font-thin '>
                        {recipe.strInstructions}
                    </p>
                </div>
            </div>

        </div>
    )

    // const [tab, setTab] = useState<string>("main")

    // const handleTabs = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault()
    //     setTab(e.currentTarget.value)
    // }

    // const selectTab = (tab: string) => {
    //     if (tab === "main") {
    //         return (
    //             <div>
    //                 <div>
    //                     <Image className='w-full lg:w-96' alt="image" unoptimized width={10} height={10} src={`${recipe.strMealThumb}/preview`} />
    //                 </div>
    //                 <div className='flex flex-col px-2 py-4'>
    //                     <div className='flex justify-between items-center'>
    //                         <h1 className='text-2xl font-bold font-serif'>{recipe.strMeal}</h1>
    //                         <SaveButton recipe={recipe} />
    //                     </div>
    //                     <p className='text-lg font-semibold'>{recipe.strArea}</p>
    //                     {recipe.strSource ?
    //                         <Link className='link text-right' href={recipe.strSource} target='_black'>
    //                             Source
    //                         </Link>
    //                         :
    //                         null
    //                     }

    //                 </div>
    //             </div>

    //         )
    //     }
    //     if (tab === "ingredients") {
    //         const arrayIng = []
    //         for (let i = 1; i < 20; i++) {
    //             let ing = recipe[`strIngredient${i}`]
    //             let measure = recipe[`strMeasure${i}`]
    //             if (ing !== "" && measure !== "") {
    //                 let obj = {
    //                     ingredients: ing,
    //                     measurement: measure
    //                 }
    //                 arrayIng.push(obj)
    //             }

    //         }


    //         return (
    //             <div className='p-2 space-y-4'>
    //                 <div className="overflow-x-auto">
    //                     <table className="table">
    //                         {/* head */}
    //                         <thead>
    //                             <tr className='font-bold text-black text-lg'>
    //                                 <th>Ingredients</th>
    //                                 <th>Measurement</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {arrayIng && arrayIng.map((ing, index) => (
    //                                 <tr key={index}>
    //                                     <td className='font-semibold'>
    //                                         {ing.ingredients}
    //                                     </td>
    //                                     <td className='italic font-gray-400'>
    //                                         {ing.measurement}
    //                                     </td>
    //                                 </tr>

    //                             ))}
    //                             <tr>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                 </div>
    //             </div>
    //         )
    //     }

    //     if (tab === "instructions") {
    //         return (
    //             <div className='h-96 overflow-y-auto p-4'>
    //                 <p className='font-light text-lg italic'>
    //                     {recipe.strInstructions}

    //                 </p>
    //             </div>
    //         )
    //     }
    // }


    // const tabInfo = [
    //     {
    //         label: "Main",
    //         value: "main"
    //     },
    //     {
    //         label: "Ingredients",
    //         value: "ingredients"
    //     },
    //     {
    //         label: "Instructions",
    //         value: "instructions"
    //     }
    // ]


    // return (
    //     <div className='my-4 h-screen bg-white p-2 w-96 mx-auto rounded-lg text-black lg:w-full'>
    //         <div>
    //         </div>
    //         <div className="tabs tabs-boxed items-center justify-around bg-white">
    //             <BackButton />
    //             {tabInfo.map(({ label, value }, index) => (
    //                 <button onClick={handleTabs} className={`tab duration-300 font-bold font   text-black ${tab === value ? "bg-red-500 text-white" : ""}`} key={index} value={value}>
    //                     {label}
    //                 </button>
    //             ))}
    //         </div>
    //         <div className=''>
    //             {selectTab(tab)}
    //         </div>
    //         {/* <Suggestions area={recipe.strArea} /> */}
    //     </div>
    // )
}


