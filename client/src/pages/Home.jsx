
import { useState } from "react"

import Header from "../components/Header.jsx"
import Start from "../components/sections/Start.jsx"
import Reservation from "../components/sections/Reservation.jsx"
import Contact from "../components/sections/Contact.jsx"
import Footer from "../components/Footer.jsx"

import weekendSpecial from "../images/special_deals/weekend_special.png"
import pretzelDeal from "../images/special_deals/pretzel_deal.png"
import coffeeDeal from "../images/special_deals/coffee_deal.png"

export default function Home(props) {

    return (
        <div id="start">
            <Header cartItems={props.cartItems} setCartItems={props.setCartItems} />
            <main className="grid place-items-center">
                <Start />
                <Reservation />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}