import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";//outlet uses the layout as base and keeps them same and changes are allowed 
// only inside the outlet
function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
export default Layout
