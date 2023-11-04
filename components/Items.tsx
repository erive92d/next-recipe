import { ItemsProps } from '@/lib/props'
import Image from 'next/image'
import React from 'react'

interface MyProps {
    items: ItemsProps[]
}

export default function Items({items}:MyProps) {
    console.log(items)
    
  return (
    <div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            {items && items.map((item) => (
                <div key={item.idMeal} className="carousel-item">
                    <Image unoptimized alt="image" width={100} height={100} src={`${item.strMealThumb}/preview`} className="rounded-box" />
                </div> 
            ))}
           
        </div>
    </div>
  )
}
