"use client"

import MealAmount from "@/helpers/amountMeal"
import { CatProps } from "@/lib/props"
import Link from "@/node_modules/next/link"
import { useState } from "react"

export default function ShowAllCategories({ meals }: CatProps) {


    return (
        <div className="lg:hidden">
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-xs btn-ghost rounded-xl bg-gray-200 font-bold text-orange-500">
                        {/* <button className='btn btn-xs btn-ghost rounded-xl bg-gray-200 font-bold text-orange-500'>Show all</button> */}
                        show more
                    </label>
                </div>
                <div className="drawer-side z-20">

                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-0 w-80 min-h-full bg-white text-gray-700 space-y-4">
                        {/* Sidebar content here */}
                        <li className="">
                            <h1 className=" text-center font-bold text-xl text-white bg-orange-500 rounded-none">All Categories</h1>
                        </li>
                        {meals && meals.map((meal, index) => (
                            <li key={index} className="flex-row border-b border-orange-500 font-normal gap-2">
                                <Link href={`/items/${meal.strCategory}`} className="">
                                    {meal.strCategory}
                                </Link>
                                <MealAmount cat={meal.strCategory} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        // <button className='btn btn-xs btn-ghost rounded-xl bg-gray-200 font-bold text-orange-500'>Show all</button>
    )
}