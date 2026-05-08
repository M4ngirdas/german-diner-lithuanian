
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { menuData } from "../data/menu.js"

import Home from "../pages/Home.jsx"
import Menu from "../pages/Menu.jsx"
import PageNotFound from "../pages/PageNotFound.jsx"

export default function App() {

    const [menuItems, setMenuItems] = useState(menuData)
    const [cartItems, setCartItems] = useState([])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {["/", "/home"].map((path, index) => (
                        <Route key={index} path={path} element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
                    ))
                    }
                    <Route path="/menu" element={
                        <Menu
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            menuItems={menuItems}
                            setMenuItems={setMenuItems}
                        />
                    }
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}