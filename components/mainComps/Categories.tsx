import MealAmount from '@/helpers/amountMeal'
import { getCategories } from '@/lib/api'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { CatProps } from '@/lib/props'



export default async function Categories() {

    const res = await getCategories()
    const { meals }: CatProps = res
    const slicedMeals = meals.slice(0, 6)

    return (
        <div className='text-gray-600 font-bold'>
            <div className='flex text-white  bg-black bg-opacity-70 px-6 py-4 justify-between items-center'>
                <h1 className='font-bold  text-2xl'>Popular Categories</h1>
                {/* <button className='btn btn-xs btn-ghost rounded-xl bg-gray-200 font-bold text-orange-500'>Show all</button> */}

                <Link href="/categories" className='btn btn-xs btn-ghost rounded-xl bg-gray-200 font-bold text-orange-500'>Show all</Link>

            </div>
            <div className='flex-wrap hidden lg:flex'>
                {meals && meals.map((cat, index) => (
                    <div key={index} className="w-2/6  p-2 ">
                        <div className=' flex flex-col justify-center items-center bg-green-500 text-white  rounded-sm'>
                            <Link href={`/items/${cat.strCategory}`} className="">
                                <h2 className="">{cat.strCategory}</h2>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap p-4 lg:hidden '>

                {slicedMeals && slicedMeals.map((cat, index) => (
                    <div key={index} className="w-2/6  p-2 ">
                        <div className=' flex flex-col justify-center py-2 items-center bg-black bg-opacity-70 text-white'>
                            <Link href={`/items/${cat.strCategory}`} className="">
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

function ModalCategories() {
    return (
        <div>
            <a href="#my_modal_8" className="">...</a>

            <div className="modal" role="dialog" id="my_modal_8">
                <div className="modal-box text-black">
                    <h3 className=" text-lg">Hello!</h3>
                    <p className="py-4">More categories coming soon...</p>
                    <div className="modal-action">
                        <a href="#" className="btn">Yay!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
