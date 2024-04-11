import { getCategories, searchByCategory } from '@/lib/api'
import { ItemsProps } from '@/lib/props'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import BackButton from '@/components/Actions/BackButton'
interface ParamProps {
    params: {
        category: string
    }
}

interface RecipeProps {
    meals: ItemsProps[]
}

export async function generateStaticParams() {
    //GRAB STATIC PATHS FROM MEALS CATEGORIES
    const { meals } = await getCategories()
    return meals.map((cat: { strCategory: any }) => (
        {
            category: cat.strCategory
        }
    ))
}
async function getCategory(category: string) {
    //SEARCH CATEGORY 
    const recipe: RecipeProps = await searchByCategory(category)
    return recipe
}

export default async function page({ params: { category } }: ParamProps) {

    const data = await getCategory(category)

    return (
        <div className='py-8'>
            <div className=' p-2 text-center'>
                {/* <BackButton /> */}
                <h1 className=' text-2xl  '>{category}</h1>
            </div>
            <div className='flex flex-wrap lg:p-6 '>
                {data.meals.map((rec) => (
                    <div key={rec.idMeal} className='p-2 card w-2/4 md:w-1/3 lg:w-1/4'>
                        <div className="bg-white h-80 lg:h-96">
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
