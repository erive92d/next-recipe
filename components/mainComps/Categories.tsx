import MealAmount from '@/helpers/amountMeal'
import { getCategories } from '@/lib/api'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { CatProps } from '@/lib/props'
import CategoryLogo from '@/helpers/categoryLogo'



export default async function Categories() {

    const res = await getCategories()
    const { meals }: CatProps = res
    const slicedMeals = meals.slice(0, 6)

    return (
        <div className='text-gray-600 font-bold '>
            <div className='flex text-white  bg-black bg-opacity-70 px-6 py-4 justify-between items-center'>
                <h1 className='font-bold  text-2xl'>Popular Categories</h1>
                <Link href="/categories" className='btn lg:hidden btn-xs btn-ghost rounded-xl bg-gray-200 font-bold text-orange-500'>Show all</Link>
            </div>
            {/* LARGE */}
            <div className='hidden lg:p-8 lg:flex'>
                {meals && meals.map((cat, index) => (
                     <div key={index} className="w-2/6  p-2 ">
                        <div className=' flex flex-col justify-center py-2 items-center bg-gray-200 bg-opacity-80 rounded '>
                            <Link href={`/items/${cat.strCategory}`} className="flex flex-col items-center text-gray-800">
                                <span className='text-3xl text-orange-500'><CategoryLogo categoryName={cat.strCategory}/></span>
                                <h2 className="">{cat.strCategory}</h2>
                                <MealAmount cat={cat.strCategory} />
                            </Link>
                        </div>
                 </div>
                ))}
            </div>
            {/* MOBILE */}
            <div className='flex flex-wrap p-4 lg:hidden '>
                {slicedMeals && slicedMeals.map((cat, index) => (
                    <div key={index} className="w-2/6  p-2 ">
                        <div className=' flex flex-col justify-center py-2 items-center bg-gray-200 bg-opacity-80 rounded '>
                            <Link href={`/items/${cat.strCategory}`} className="flex flex-col items-center text-gray-800">
                                <span className='text-3xl text-orange-500'><CategoryLogo categoryName={cat.strCategory}/></span>
                                <h2 className="">{cat.strCategory}</h2>
                                <MealAmount cat={cat.strCategory} />
                            </Link>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
