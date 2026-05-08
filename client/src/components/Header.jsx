
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LuShoppingCart } from "react-icons/lu"

import logo from "../images/logo.png"
import Cart from "./Cart.jsx"

export default function Header(props) {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const navigate = useNavigate()
    const totalCartItems = props.cartItems.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)

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
            <header className={`${isScrolled ? "py-3" : "py-6"} flex justify-center transition-all duration-300 z-40 w-full fixed top-0 shadow-lg bg-evergreen-darker`}>
                <div className="flex justify-between items-center w-[80%]">
                    <div className="flex items-center gap-18">
                        <img
                            src={logo}
                            alt="Bavaria lounge logo"
                            className={`${isScrolled ? "w-25" : "w-35"} duration-300`}
                        />
                        <div className="flex gap-6">
                            <a onClick={() => navigate("/home")} href="#start" className="peer transition-all duration-300 hover:text-metallic-gold hover:scale-95">Home</a>
                            <a onClick={() => navigate("/home")} href="#reservation" className="peer transition-all duration-300 hover:text-metallic-gold hover:scale-95" >Reservation</a>
                            <a onClick={() => navigate("/home")} href="#contact" className="peer transition-all duration-300 hover:text-metallic-gold hover:scale-95">Contact</a>
                            <a onClick={() => navigate("/menu")} className="peer transition-all duration-300 hover:text-metallic-gold hover:scale-95">Menu</a>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="relative">
                            <button onClick={() => setIsCartOpen(prev => !prev)} className="flex items-center gap-2 text-lg rounded-sm hover:text-metallic-gold">
                                <span className="relative">
                                    {props.cartItems.length > 0 ? <span className={`${totalCartItems > 99 ? "w-5" : ""} grid place-items-center gap-2 font-black absolute text-[11px] -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white`}>{totalCartItems}</span> : null}
                                    <LuShoppingCart className="text-xl" />
                                </span>
                                <span className="flex items-center gap-2">Cart</span>
                            </button>
                            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartItems={props.cartItems} setCartItems={props.setCartItems} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}