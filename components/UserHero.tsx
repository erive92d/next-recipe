"use client"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import SignoutBtn from "./Actions/SignoutBtn"
import { useEffect, useState } from "react"
import grabUserData from "@/controllers/grabUserData"
import { RecipeFromDB } from "@/lib/props"
import Image from "next/image"


export default function UserComp({ session }: any) {

    const [recipes, setRecipes] = useState<RecipeFromDB[]>([])

    useEffect(() => {
        const fetchByUserId = async () => {
            const response = await grabUserData()
            setRecipes(response)
        }
        fetchByUserId()
    })

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost">Hello, {session?.user?.name}</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full">
                    <DrawerHeader>
                        <DrawerTitle>Recipes saved</DrawerTitle>
                        {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
                    </DrawerHeader>
                    <div className="p-4 pb-0 flex justify-center gap-4 overflow-auto">
                        {recipes.map((recipe, index) => (
                            <div key={index}>
                                <Image className='' alt="image" unoptimized width={200} height={200} src={`${recipe.image}/preview`} />
                                <span className="text-sm font-light">
                                    {recipe.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <DrawerFooter>
                        <SignoutBtn />
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
