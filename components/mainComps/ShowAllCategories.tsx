"use client"

import MealAmount from "@/helpers/amountMeal"
import { CatProps } from "@/lib/props"
import Link from "@/node_modules/next/link"
import { useState } from "react"

export default function ShowAllCategories({ meals }: CatProps) {
    return (
        <button className='btn btn-xs btn-ghost rounded-xl bg-gray-200 font-bold text-orange-500'>Show all</button>
    )
}