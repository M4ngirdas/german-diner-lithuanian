
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { menuData } from "../data/menu.js"
import { useLanguageStore } from "../store.js"

import Home from "../pages/Home.jsx"
import Categories from "../pages/Categories.jsx"
import Menu from "../pages/Menu.jsx"
import PageNotFound from "../pages/PageNotFound.jsx"

export default function App() {

    const [menuItems, setMenuItems] = useState(menuData)
    const [cartItems, setCartItems] = useState([])

    const language = useLanguageStore(state => state.language)
    const setLanguage = useLanguageStore(state => state.setLanguage)

    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {["/", "/home"].map((path, index) => (
                        <Route key={index} path={path} element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
                    ))
                    }
                    <Route path="/categories" element={<Categories menuItems={menuItems} setMenuItems={setMenuItems} />} />
                    <Route path="/categories/menu" element={<Menu />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}