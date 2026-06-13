
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { LuArrowBigLeft, LuArrowLeft, LuChevronLeft, LuGlobe, LuLoaderCircle, LuMenu, LuShoppingCart } from "react-icons/lu"
import { useLanguageStore } from "../store.js"
import { normalItems, yourExperienceItems } from "../data/header.js"

import Sidebar from "./Sidebar.jsx"
import logo from "../images/logo.png"
import lithuaniaFlag from "../images/flags/lithuania.png"
import usaFlag from "../images/flags/usa.png"

export default function Header(props) {

    const [isLoading, setIsLoading] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSidebarShown, setIsSidebarShown] = useState(false)

    const { pathname } = useLocation()
    const language = useLanguageStore(state => state.language)
    const setLanguage = useLanguageStore(state => state.setLanguage)
    const navigate = useNavigate()

    if (isLoading) {
        document.body.classList.add("loading")
    } else {
        document.body.classList.remove("loading")
    }

    const normalElements = normalItems.map((item, index) => {
        return (
            <a
                key={index}
                onClick={() => {
                    navigate(item.path)
                    setIsSidebarShown(false)
                }}
                href={item.href}
                className="peer w-fit transition-all duration-300 hover:text-metallic-gold hover:scale-95"
            >
                {language === "lt" ? item.name.lt : item.name.en}
            </a>
        )
    })

    const yourExperienceElements = yourExperienceItems.map((item, index) => {
        return (
            <a
                key={index}
                onClick={() => {
                    navigate(item.path)
                    setIsSidebarShown(false)
                }}
                href={item.href}
                className="peer w-fit transition-all duration-300 hover:text-metallic-gold hover:scale-95"
            >
                {language === "lt" ? item.name.lt : item.name.en}
            </a>
        )
    })

    function renderItems() {
        switch (pathname) {
            case "/categories":
            case "/categories/menu":
            case "/home":
            case "/":
                return normalElements
                break

            case "/your-experience":
                return yourExperienceElements
                break
        }
    }

    function changeLanguage() {
        setIsLoading(true)
        setTimeout(() => {
            setLanguage()
            setIsLoading(false)
        }, 700)
    }

    useEffect(() => {
        function onScroll() {
            if (window.scrollY > 0) {
                setIsScrolled(true)
                return
            }
            setIsScrolled(false)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            <Sidebar
                isSidebarShown={isSidebarShown}
                setIsSidebarShown={setIsSidebarShown}
                changeLanguage={changeLanguage}
                renderItems={renderItems}
            />
            <div className={`${isLoading ? "opacity-100 overflow-hidden" : "opacity-0 pointer-events-none"} grid place-items-center content-center gap-2 transition-opacity duration-200 fixed inset-0 z-50 bg-evergreen-dark`}>
                <h1 className="flex items-center gap-2 text-4xl"><LuLoaderCircle className="animate-spin" /> Loading</h1>
            </div>
            <header className="flex justify-center py-4 md:py-6 z-40 w-full fixed top-0 shadow-lg bg-evergreen-darker">
                <div className="flex justify-between items-center w-[90%] lg:w-[80%]">
                    <div className="flex items-center gap-18">
                        <div className="flex gap-6">
                            <a onClick={() => navigate("/home")} href="#start">
                                <img
                                    src={logo}
                                    alt="Bravo restoranas logo"
                                    className="w-30 transition-all duration-300 cursor-pointer"
                                />
                            </a>
                        </div>
                        <nav className="hidden md:flex gap-6 text-lg">{renderItems()}</nav>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setIsSidebarShown(true)} className="block md:hidden"><LuMenu className="text-2xl" /></button>
                        <div className="hidden md:flex gap-8">
                            <button onClick={changeLanguage} className="flex items-center gap-2">
                                <img
                                    src={language === "lt" ? lithuaniaFlag : usaFlag}
                                    alt={language === "lt" ? "Lithuania flag" : "USA flag"}
                                    className="w-5"
                                />
                                {language === "lt" ? "LT" : "EN"}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}