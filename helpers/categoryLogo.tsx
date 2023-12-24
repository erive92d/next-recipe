"use client"

import React from 'react'
import { LuBeef } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { GiGoat } from "react-icons/gi";
import { GiSheep } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { TbPig } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import { TbSalad } from "react-icons/tb";
import { CiFries } from "react-icons/ci";
import { LuVegan } from "react-icons/lu";
import { GiPlantsAndAnimals } from "react-icons/gi";


interface LogoProp {
  categoryName: string
}


export default function CategoryLogo({categoryName}:LogoProp) {

  switch(categoryName) {
    case "Beef":
    return <LuBeef/>;
    case "Chicken":
    return <TbMeat/>;
    case "Breakfast":
    return <MdOutlineFreeBreakfast />
    case "Dessert":
    return <LuDessert />
    case "Goat":
    return <GiGoat />
    case "Lamb":
    return <GiSheep />
    case "Miscellaneous":
    return <IoFastFoodOutline />
    case "Pasta":
    return <BiLibrary />
    case "Pork":
    return <TbPig />
    case "Seafood":
    return <IoFishOutline />
    case "Side":
    return <TbSalad />
    case "Starter":
    return <CiFries />
    case "Vegan":
    return <LuVegan />
    case "Vegetarian":
    return <GiPlantsAndAnimals />

  }


}
