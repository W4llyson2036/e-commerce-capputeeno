// Lib
import { Outlet } from "react-router-dom";

// Components
import { Header } from "../components/Header/Header";
import { Nav } from "../components/Nav/Nav";

export function MainLayOut() {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
        </>
    )
}