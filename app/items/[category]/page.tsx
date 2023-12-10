import { searchByCategory } from '@/lib/api'
import { ItemsProps } from '@/lib/props'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import BackButton from '@/components/BackButton'
interface ParamProps {
    params: {
        category: string
    }
}

interface RecipeProps {
    meals: ItemsProps[]
}

export default async function page({ params: { category } }: ParamProps) {

    const recipe: RecipeProps = await searchByCategory(category)

    if (!recipe) {
        return <h1>Loading..</h1>
    }

    return (
        <div className=''>
            <div className='flex justify-between items-center p-2 bg-green-600 text-white'>
                <BackButton />
                <h1 className='text-right text-2xl font-bold'>{category}</h1>
            </div>
            <div className='flex flex-wrap lg:p-6 '>
                {recipe.meals.map((rec) => (
                    <div key={rec.idMeal} className='p-2 card w-2/4 lg:w-1/4'>
                        <div className="bg-white h-80 rounded-xl shadow-xl lg:h-96">
                            <figure className="">
                                <Image unoptimized width={50} height={50} src={`${rec.strMealThumb}/preview`} alt="Image not available" className="lg:h-80 w-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <Link href={`/recipe/${rec.idMeal}`}>
                                    <h2 className="card-title text-xs ">{rec.strMeal}</h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>

    )
}
