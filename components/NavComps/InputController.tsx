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
                <div className='bg-white flex justify-between rounded px-2 items-center text-gray-700'>
                    {/* <input type="text" className="input input-sm input-ghost bg-white outline-none focus:outline-none px-2" /> */}
                    <InputComp handleClick={handleClick} />
                </div>
                :
                <>
                    <button onClick={handleClick}>
                        <FaSearch />
                    </button>
                    {/* <SearchComp /> */}
                </>

            }
        </div>
    )

}