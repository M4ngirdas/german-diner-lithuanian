
import { useState } from "react"
import { useLanguageStore } from "../store.js"
import { menuData } from "../data/menu.js"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Item from "../components/Item.jsx"

export default function Menu() {

    const [selectedItem, setSelectedItem] = useState(null)

    const language = useLanguageStore(language => language.state)
    const mainDishesData = menuData.filter(item => item.category === "mainDishes")
    const soupsData = menuData.filter(item => item.category === "soups")
    const bakeryData = menuData.filter(item => item.category === "bakery")
    const dessertsData = menuData.filter(item => item.category === "dessert")
    const drinksData = menuData.filter(item => item.category === "drinks")
    const specialDealsData = menuData.filter(item => item.category === "specialDeals")

    const mainDishesElements = mainDishesData.map(item =>
        <div
            onClick={() => setSelectedItem(item)}
            key={item.id}
            className="cursor-pointer"
        >
            <img
                src={item.imgSrc}
                alt={item.imgAlt}
                loading="lazy"
                className="object-cover w-full h-65 rounded-t-sm select-none"
            />
            <div className="flex justify-between items-center rounded-b-sm p-6 bg-evergreen-light">
                <h2 className="text-lg">{language === "lt" ? item.name.lt : item.name.en}</h2>
                <p className="text-lg text-silver/70">€{item.price}</p>
            </div>
        </div>
    )

    const soupsElements = soupsData.map(item =>
        <div
            onClick={() => setSelectedItem(item)}
            key={item.id}
            className="cursor-pointer"
        >
            <img
                src={item.imgSrc}
                alt={item.imgAlt}
                loading="lazy"
                className="object-cover w-full h-65 rounded-t-sm select-none"
            />
            <div className="flex justify-between items-center rounded-b-sm p-6 bg-evergreen-light">
                <h2 className="text-lg">{language === "lt" ? item.name.lt : item.name.en}</h2>
                <p className="text-lg text-silver/70">€{item.price}</p>
            </div>
        </div>
    )

    const bakeryElements = bakeryData.map(item =>
        <div
            onClick={() => setSelectedItem(item)}
            key={item.id}
            className="cursor-pointer"
        >
            <img
                src={item.imgSrc}
                alt={item.imgAlt}
                loading="lazy"
                className="object-cover w-full h-65 rounded-t-sm select-none"
            />
            <div className="flex justify-between items-center rounded-b-sm p-6 bg-evergreen-light">
                <h2 className="text-lg">{language === "lt" ? item.name.lt : item.name.en}</h2>
                <p className="text-lg text-silver/70">€{item.price}</p>
            </div>
        </div>
    )

    const dessertsElements = dessertsData.map(item =>
        <div
            onClick={() => setSelectedItem(item)}
            key={item.id}
            className="cursor-pointer"
        >
            <img
                src={item.imgSrc}
                alt={item.imgAlt}
                loading="lazy"
                className="object-cover w-full h-65 rounded-t-sm select-none"
            />
            <div className="flex justify-between items-center rounded-b-sm p-6 bg-evergreen-light">
                <h2 className="text-lg">{language === "lt" ? item.name.lt : item.name.en}</h2>
                <p className="text-lg text-silver/70">€{item.price}</p>
            </div>
        </div>
    )

    const drinksElements = drinksData.map(item =>
        <div
            onClick={() => setSelectedItem(item)}
            key={item.id}
            className="cursor-pointer"
        >
            <img
                src={item.imgSrc}
                alt={item.imgAlt}
                loading="lazy"
                className="object-cover w-full h-65 rounded-t-sm select-none"
            />
            <div className="flex justify-between items-center rounded-b-sm p-6 bg-evergreen-light">
                <h2 className="text-lg">{language === "lt" ? item.name.lt : item.name.en}</h2>
                <p className="text-lg text-silver/70">€{item.price}</p>
            </div>
        </div>
    )

    const specialDealsElements = specialDealsData.map(item =>
        <div
            onClick={() => setSelectedItem(item)}
            key={item.id}
            className="cursor-pointer"
        >
            <img
                src={item.imgSrc}
                alt={item.imgAlt}
                loading="lazy"
                className="object-cover w-full h-65 rounded-t-sm select-none"
            />
            <div className="flex justify-between items-center rounded-b-sm p-6 bg-evergreen-light">
                <h2 className="text-lg">{language === "lt" ? item.name.lt : item.name.en}</h2>
                <p className="text-lg text-silver/70">€{item.price}</p>
            </div>
        </div>
    )

    return (
        <div id="mainDishes" className="flex flex-col items-center gap-6 h-full">
            <Header />
            <Item selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            <main className="grid gap-12 w-[90%] lg:w-[80%] mt-40 pb-30">
                <section className="space-y-6">
                    <h1 className="font-semibold text-[clamp(2.2rem,3.2vw,6rem)]">{language === "lt" ? "Pagrindiniai patiekalai" : "Main dishes"}</h1>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{mainDishesElements}</div>
                </section>
                <section id="soups" className="space-y-6 pt-42">
                    <h1 className="font-semibold text-[clamp(2.2rem,3.2vw,6rem)]">{language === "lt" ? "Sriubos" : "Soups"}</h1>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{soupsElements}</div>
                </section>
                <section id="bakery" className="space-y-6 pt-42">
                    <h1 className="font-semibold text-[clamp(2.2rem,3.2vw,6rem)]">{language === "lt" ? "Bandelės" : "Bakery"}</h1>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{bakeryElements}</div>
                </section>
                <section id="dessert" className="space-y-6 pt-42">
                    <h1 className="font-semibold text-[clamp(2.2rem,3.2vw,6rem)]">{language === "lt" ? "Desertai" : "Desserts"}</h1>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{dessertsElements}</div>
                </section>
                <section id="drinks" className="space-y-6 pt-42">
                    <h1 className="font-semibold text-[clamp(2.2rem,3.2vw,6rem)]">{language === "lt" ? "Gėrimai" : "Drinks"}</h1>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{drinksElements}</div>
                </section>
                <section id="specialDeals" className="space-y-6 pt-42">
                    <h1 className="font-semibold text-[clamp(2.2rem,3.2vw,6rem)]">{language === "lt" ? "Specialūs pasiūlymai" : "Special deals"}</h1>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">{specialDealsElements}</div>
                </section>
            </main>
            <Footer />
        </div>
    )
}