import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar";

export default function Layout(){
    return <>
    <Navbar />
    <Outlet />
    </>
}