import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import GoToProfile from "./Actions/GoToProfile";
import JoinUsBtn from "./Actions/JoinUsBtn";
import SignoutBtn from "./Actions/SignoutBtn";


export default async function UserHero() {
    const session = await getServerSession(authOptions)

    if (session?.status === "loading") return <h1>Loading...</h1>


    return (
        <div className="">
            {session?.user ?
                <>
                    <div className="dropdown dropdown-left">
                        <div tabIndex={0} role="button" className=" ">
                            <h1>Hello {session?.user?.name}</h1>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            <li>
                                <GoToProfile />
                            </li>
                            <li>
                                <SignoutBtn />
                            </li>
                        </ul>
                    </div>
                </>
                :
                <JoinUsBtn />
            }
        </div>
    )

}