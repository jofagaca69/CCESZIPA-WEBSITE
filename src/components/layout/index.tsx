import * as React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
    return(
        <>
            <Navbar></Navbar>
            <h1 className="hidden">Colegio Campestre Exploradores del Saber Zipaquirá</h1>
            { children}
            <Footer></Footer>
        </>
    )
}

export default Layout