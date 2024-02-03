import UserHero from "../UserHero";
import InputController from "./InputController";
export default function ServerNav() {

    return (
        <div className="navbar bg-orange-500 text-gray-100">
            <div className="navbar-start">
                <a className="px-2 text-white text-xl">Eat-O</a>
            </div>
          
            {/* CLIENT SIDE */}
            <div className="navbar-end gap-4">
                <InputController />
                <UserHero />
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About</a></li>
                        <li><a>Contacts</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}