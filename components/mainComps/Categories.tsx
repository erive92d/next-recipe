import { getCategories } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"

interface CatProps {
    meals: {
        strCategory: string
    }[]
}

export default async function Categories() {

    const res = await getCategories()
    const { meals }: CatProps = res
    const slicedMeals = meals.slice(0, 5)

    return (
        <div className=' bg-white'>
            <div className='flex-wrap hidden lg:flex'>
                {meals && meals.map((cat, index) => (
                    <div key={index} className="w-2/6 text-gray-600 p-2 ">
                        <div className=' flex flex-col justify-center items-center bg-orange-400 text-white rounded-sm'>
                            <Link href={`/items/${cat.strCategory}`} className="">
                                <h2 className="">{cat.strCategory}</h2>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap bg-white p-4 lg:hidden'>
                {slicedMeals && slicedMeals.map((cat, index) => (
                    <div key={index} className="w-2/6 text-gray-600 p-2 ">
                        <div className=' flex flex-col justify-center items-center bg-orange-400 text-white rounded-sm'>
                            <Link href={`/items/${cat.strCategory}`} className="">
                                <h2 className="">{cat.strCategory}</h2>
                            </Link>
                        </div>
                    </div>
                ))}
                <div className="w-2/6 text-gray-600 p-2 ">
                    <div className='flex flex-col justify-center items-center bg-orange-400 text-white rounded-sm'>
                        <ModalCategories />
                    </div>
                </div>
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
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This modal works with anchor links</p>
                    <div className="modal-action">
                        <a href="#" className="btn">Yay!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
