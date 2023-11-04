import { searchByCategory } from '@/lib/api'
import { ItemsProps } from '@/lib/props'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
interface ParamProps {
    params: {
        category:string
    }
}

interface RecipeProps {
     meals: ItemsProps[]
}

export default async function page({params: {category}}:ParamProps) {

   const recipe:RecipeProps = await searchByCategory(category)
  
   if(!recipe) {
        return <h1>Loading..</h1>
   } 

  return (
    <div className='flex flex-wrap'>
            {recipe.meals.map((rec) => (
                <div key={rec.idMeal} className=' p-2 card w-2/4'>
                    <div className="bg-white h-80 rounded-xl shadow-xl">
                        <figure className="">
                          <Image unoptimized width={100} height={100} src={`${rec.strMealThumb}/preview`} alt="Image not available" className=" w-full" />
                         </figure>
                    <div className="card-body items-center text-center">
                            <Link href={`/recipe/${rec.idMeal}`}>
                                <h2 className="card-title text-sm">{rec.strMeal}</h2>
                            </Link>
                    </div>  
                </div>
        </div>
          
       ))}
    </div>
  )
}
