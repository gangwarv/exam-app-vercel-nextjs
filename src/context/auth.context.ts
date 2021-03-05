import React from 'react';


export interface AuthContextModel {
    appName: string;
    isLoggedIn: boolean;
    user: User;
    logo: Pic;
    menus: Array<{ name: string, path: string }>;
    logIn: () => void;
    logOut: () => void;
}
interface Pic {
    src: string;
}
export interface User {
    name: string;
    email: string;
    profileUrl: string;
}

export const defaultValue: AuthContextModel = {
    appName: 'TDD-App',
    isLoggedIn: false,
    logo: { src: "/icons/firefox/firefox-general-64-64.png" },
    user: {
        name: 'Vishal Gangwar',
        email: 'ccsscscscafaa',
        profileUrl: 'https://lh3.googleusercontent.com/a-/AOh14GgE58FaFge_Vm4VMkOhyIK_TT4zLsgbKf3ZHm6J=s96-c'
    },
    menus: [
        { name: "Home", path: "/" },
        { name: "Explore", path: "/explore" },
        { name: "My Exams", path: "/my-exams" },
        { name: "About", path: "/about" },
    ],
    logIn() { },
    logOut() { }
}

export default React.createContext<AuthContextModel>(defaultValue)