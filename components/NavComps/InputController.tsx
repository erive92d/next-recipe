"use client"
import { FaSearch } from "react-icons/fa";
import { useState } from "react"
import InputComp from "./InputComp";
import UserHero from "../UserHero";

export default function InputController() {

    const [showInput, setShowInput] = useState<boolean>(false)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
        e.preventDefault()
        setShowInput(!showInput)
    }

    return (
        <div>
            {showInput ?
                <div className=' flex justify-between rounded px-2 items-center text-gray-700'>
                    <InputComp handleClick={handleClick} />
                </div>
                :
                <>
                    <button onClick={handleClick}>
                        <FaSearch />
                    </button>
                </>

            }
        </div>
    )

}