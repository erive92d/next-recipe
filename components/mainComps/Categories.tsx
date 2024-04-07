import MealAmount from '@/helpers/amountMeal'
import { getCategories } from '@/lib/api'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { CatProps } from '@/lib/props'
import CategoryLogo from '@/helpers/categoryLogo'


export default async function Categories() {

    const res = await getCategories()
    if (!res) return <h1>Loading...</h1>
    const { meals }: CatProps = res
    const slicedMeals = meals.slice(0, 6)

    return (
        <div className='font-bold py-10 space-y-8'>
            <div className='  px-2 py-4 text-center'>
                <h1 className='text-2xl font-sans py-2 font-bold '>
                    Popular Categories
                </h1>
                <Link href="/categories" className='lg:hidden underline text-sm font-light '>more</Link>
            </div>
            {/* LARGE */}
            <div className='hidden lg:flex overflow-auto'>
                {meals && meals.map((cat, index) => (
                    <div key={index} className="w-2/6 p-2 ">
                        <div className='flex flex-col justify-center p-8 items-center border-2 h-40 w-40 rounded-full '>
                            <Link href={`/items/${cat.strCategory}`} className="flex flex-col items-center ">
                                <span className='text-3xl '><CategoryLogo categoryName={cat.strCategory} /></span>
                                <h2 className="">{cat.strCategory}</h2>
                                {/* <MealAmount cat={cat.strCategory} /> */}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {/* MOBILE */}
            <div className='flex flex-wrap p-4 lg:hidden '>
                {slicedMeals && slicedMeals.map((cat, index) => (
                    <div key={index} className="w-2/6  p-2 ">
                        <div className='flex flex-col justify-center p-8 items-center '>
                            <Link href={`/items/${cat.strCategory}`} className="flex flex-col items-center text-gray-800">
                                <span className='text-3xl'><CategoryLogo categoryName={cat.strCategory} /></span>
                                <h2 className="">{cat.strCategory}</h2>
                                {/* <MealAmount cat={cat.strCategory} /> */}
                            </Link>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
