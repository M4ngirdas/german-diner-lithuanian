
import { useState, useLayoutEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useLanguageStore } from "../store.js"
import { LuMenu, LuSearch, LuCheck, LuChevronRight } from "react-icons/lu"
import { categoriesData } from "../data/categories.js"
import { menuCategoriesData } from "../data/menuCategories.js"

import potRoast from "../images/menu/pot_roast.png"
import Header from "../components/Header.jsx"
import Item from "../components/Item.jsx"
import Footer from "../components/Footer.jsx"

export default function Menu(props) {

    const [isNotificationShown, setIsNotificationShown] = useState(false)
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

    const language = useLanguageStore(state => state.language)
    const { pathname } = useLocation()
    const navigate = useNavigate()

    function showNotification() {
        setIsNotificationShown(true)
        setTimeout(() => setIsNotificationShown(false), 2000)
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const menuCategoriesElements = menuCategoriesData.map((item, index) =>
        <a
            key={index}
            onClick={ev => navigate("/categories/menu")}
            href={item.href}
            className="relative overflow-hidden cursor-pointer select-none transition-transform duration-200 hover:scale-98"
        >
            <img
                src={item.imgSrc}
                alt={language === "lt" ? item.name.lt : item.name.en}
                className="object-cover transition-tranform duration-300 rounded-sm"
            />
            <h2 className="grid place-items-center content-center p-6 whitespace-nowrap w-full rounded-sm uppercase text-lg tracking-wider font-medium transition-colors duration-300 bg-evergreen-light">{language === "lt" ? item.name.lt : item.name.en}</h2>
        </a>
    )

    return (
        <div className="flex flex-col items-center gap-6 h-full">
            <Header />
            <main className="grid gap-6 w-[90%] lg:w-[80%] mt-40 pb-30">
                <div className="leading-tight">
                    <h1 className="font-semibold text-[clamp(2.2rem,3.2vw,6rem)]">{language == "lt" ? "Valgiaraštis" : "Menu"}</h1>
                    <h2 className="text-silver/70 text-base md:text-lg">
                        {
                            language === "lt"
                                ? "Peržiūrėkite mūsų valgiaraštį pasirinkę kategoriją."
                                : "Explore our menu by selecting a category."
                        }
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">{menuCategoriesElements}</div>
            </main>
            <Footer />
        </div>
    )
}