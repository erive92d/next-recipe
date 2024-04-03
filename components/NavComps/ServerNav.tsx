import Link from "next/link";
import UserHero from "../UserHero";
import InputController from "./InputController";
export default function ServerNav() {

    return (
       <div className="border-b border-gray-200 px-8 py-12 text-xl flex justify-between  text-black">
            <div>
                <InputController />
            </div>
            <div>
                <Link href="/" className="font-bold text-3xl">Eat-o</Link>
            </div>
            <div className="">
                <UserHero />
            </div>
        </div>
    )
}