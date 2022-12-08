import { useState } from "react";

import LoginContext from "./LoginContext";

import { login } from "../api";

// const userFromStorage = localStorage.getItem("userInfo");

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(() => {
        return (!!localStorage.getItem("userInfo"));
    });
    const [userInfo, setUserInfo] = useState(() => {
        const userFromStorage = localStorage.getItem("userInfo");
        if (userFromStorage) {
            return JSON.parse(userFromStorage);
        }
        return null;
    });

    const loginUser = async (credentials) => {
        const user = await login(credentials);
        setUserInfo(user);
        setLoggedIn(true);
        localStorage.setItem("userInfo", JSON.stringify(user));
    };

    const logoutUser = () => {
        setUserInfo(null);
        setLoggedIn(false);
        localStorage.removeItem("userInfo");
    };

    return (
        <LoginContext.Provider
            value={{ isLoggedIn, userInfo, loginUser, logoutUser }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;