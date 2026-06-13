
import { useState } from "react"
import { useInView } from "../useInView.js"

import Header from "../components/Header.jsx"
import Start from "../components/sections/home/Start.jsx"
import AboutUs from "../components/sections/home/AboutUs.jsx"
import Reservation from "../components/sections/home/Reservation.jsx"
import Location from "../components/sections/home/Location.jsx"
import Footer from "../components/Footer.jsx"

import weekendSpecial from "../images/menu/special_deals/weekend_special.png"
import pretzelDeal from "../images/menu/special_deals/pretzel_deal.png"
import coffeeDeal from "../images/menu/special_deals/coffee_deal.png"

export default function Home(props) {

    const [headerAndCtaRef, headerAndCtaInView] = useInView({ threshold: 0.2 })


    return (
        <div id="start">
            <Header />
            <main className="grid place-items-center">
                <Start />
                <Location />
                <Reservation />
            </main>
            <Footer />
        </div>
    )
}