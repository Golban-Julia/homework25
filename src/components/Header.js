import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Header = () => {
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
                    </ul>
                </nav>
            </div>
            
            <Outlet/>
        </div>
    );
};

export default Header;