"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import grabSaves from "@/controllers/grabSaves"
import grabUserData from "@/controllers/grabUserData"
import { RecipeFromDB } from "@/lib/props"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

interface UserSavesProp {
    userRecipes: RecipeFromDB[]
}

export default function UserSaves() {
    const session = useSession()
    const userId = session?.data?.user?._id

    // const email = "rain@test.com"

    // useEffect(() => {
    //     const fetchByUserId = async () => {
    //         const response = await fetch(`/api/recipeapi/recipesaves?userId=${userId ? userId : null}`, {
    //             method: "GET",
    //             cache: "no-store"
    //         })
    //         if (!response.ok) {
    //             throw new Error("Error")
    //         }
    //         const data = await response.json()
    //         console.log(data)
    //     }
    //     if (userId) {
    //         fetchByUserId()
    //     }

    // }, [userId])

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
