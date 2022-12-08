import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../contexts/LoginContext";
import Login from './Login';
import UserImage from "./UserImage";

const Header = () => {
    const { isLoggedIn } = useContext(LoginContext);

    if (!isLoggedIn) {
        return <Login />
    } else {

        return (

            <div>
                <div className="header">
                
                    <h1>Header</h1>
                    <nav>
                        <ul>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "active" : ""}
                                    to="/"
                                    end>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "active" : ""}
                                    to="users">
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "active" : ""}
                                    to="hotels">
                                    Hotels
                                </NavLink>
                            </li>
                            <li>
                                <UserImage />
                                {/* {isLoggedIn ? <UserImage /> : <Login />} */}
                            </li>
                        </ul>
                    </nav>
                </div>
                <Outlet />
            </div>
        );
    }
};

export default Header;