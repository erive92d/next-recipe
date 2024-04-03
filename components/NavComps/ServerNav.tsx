import UserHero from "../UserHero";
import InputController from "./InputController";
export default function ServerNav() {

    return (
        <div className="navbar bg-green-500">
            <div className="navbar-start">
                <a href="/" className="px-2 text-xl">Eat-O</a>
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