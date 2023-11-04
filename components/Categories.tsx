import { getCategories } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"

interface CatProps {
    meals: {
        strCategory:string
    }[]
}

export default async function Categories() {

    const res = await getCategories()
    const { meals }:CatProps = await res.json()
   
  return (
    <div className=''>
        {meals && meals.map((cat, index) => (
            <div key={index} className="italic card w-96 bg-white text-gray-600 text-2xl flex mx-auto mb-2 shadow-xl">
                <div className="card-body flex-row justify-between">
                    <h2 className="card-title">{cat.strCategory}</h2>
                    <button className='btn btn-circle btn-sm'>
                        <Link href={`/items/${cat.strCategory}`}>
                            <AiOutlineArrowRight/>
                        </Link> 
                    </button>
                </div>
            </div>
        ))}
       
    </div>
  )
}
