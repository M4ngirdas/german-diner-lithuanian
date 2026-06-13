
import { useState, useRef } from "react"
import { useLanguageStore } from "../store.js"
import { LuArrowUpToLine, LuUpload } from "react-icons/lu"

import Header from "../components/Header"
import Footer from "../components/Footer.jsx"
import WorkWithUs from "../components/sections/company/WorkWithUs.jsx"

export default function Company(props) {

    const language = useLanguageStore(state => state.language)

    return (
        <div id="about-us">
            <Header cartItems={props.cartItems} setCartItems={props.setCartItems} />
            <main className="grid place-items-center">
                <div className="grid w-[80%]">
                    <AboutUs />
                    <WorkWithUs />
                </div>
            </main>
            <Footer />
        </div>
    )
}