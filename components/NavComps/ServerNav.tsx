import Link from "next/link";
import UserHero from "../UserHero";
import InputController from "./InputController";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import JoinUsBtn from "../Actions/JoinUsBtn";
import { InputToggle } from "./InputToggle";
export default async function ServerNav() {

    const session = await getServerSession(authOptions)

    return (
        <div className=" border-b border-gray-200 py-12 text-xl flex justify-between  text-black">
            <div className="w-full max-w-sm">
                <InputToggle />
            </div>
            <div className="w-full max-w-sm">
                <Link href="/" className="font-bold text-3xl">Eat-o</Link>
            </div>
            <div className="">
                {!session ?
                    <JoinUsBtn /> :
                    <UserHero session={session} />
                }
            </div>
        </div>
    )
}