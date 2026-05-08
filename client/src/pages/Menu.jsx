
import { useState } from "react"
import { LuPlus, LuSearch, LuCheck, LuSoup, LuCookingPot, LuCroissant, LuCakeSlice, LuBeer, LuMenu, LuLayers, LuTag, LuSparkle, LuSparkles } from "react-icons/lu"

import Header from "../components/Header.jsx"
import Item from "../components/Item.jsx"
import Footer from "../components/Footer.jsx"

export default function Menu(props) {

    const [searchValue, setSearchValue] = useState("")
    const [currentCategory, setCurrentCategory] = useState("all")
    const [isNotificationShown, setIsNotificationShown] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    function addToCart(item) {
        props.setCartItems(prev => {
            const cartItemDuplicate = prev.find(itemDuplicate => itemDuplicate.id === item.id)
            if (cartItemDuplicate) {
                return prev.map(itemDuplicate => itemDuplicate.id === item.id ? { ...itemDuplicate, quantity: itemDuplicate.quantity + 1 } : itemDuplicate)
            }
            else {
                return [...prev, { ...item, quantity: 1 }]
            }
        })
    }

    function checkQuantity(id) {
        return props.cartItems.some(item => item.id === id && item.quantity === 10)
    }

    function showNotification() {
        setIsNotificationShown(true)
        setTimeout(() => setIsNotificationShown(false), 2000)
    }

    const menuElements = props.menuItems.map(item => (
        <li onClick={() => setSelectedItem(item)} key={item.id} className={`${item.name.toLowerCase().includes(searchValue.toLowerCase()) ? "block" : "hidden"} ${currentCategory === item.category || currentCategory === "all" ? "grid" : "hidden"} relative cursor-pointer`}>
            <div className="overflow-hidden">
                <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    loading="lazy"
                    className="h-80 rounded-t-sm w-full object-cover select-none transition-transform duration-200 hover:scale-105"
                />
            </div>
            <div className="flex justify-between items-center p-4 w-full rounded-b-sm bg-evergreen-light">
                <div className="grid content-start h-full">
                    <h1 className="font-medium text-lg">{item.name}</h1>
                    <p className="text-sm text-silver/80">€{item.price}</p>
                </div>
                <button
                    onClick={(ev) => {
                        ev.stopPropagation()
                        addToCart(item)
                        showNotification()
                    }}
                    title={checkQuantity(item.id) ? "You reached the maximum limit" : "Add to cart"}
                    disabled={checkQuantity(item.id)}
                    className="group grid place-items-center w-12 h-12 rounded-sm transition-all duration-200 hover:brightness-120 disabled:cursor-no-drop border-b border-metallic-gold bg-metallic-gold/20 text-metallic-gold"
                ><LuPlus className="text-xl" />
                </button>
            </div>
        </li>
    ))

    return (
        <>
            <div className="flex flex-col items-center gap-8 h-full">
                <Item selectedItem={selectedItem} setSelectedItem={setSelectedItem} addToCart={addToCart} />
                <Header cartItems={props.cartItems} setCartItems={props.setCartItems} />
                <main className="flex gap-16 w-[80%] mt-24 pt-16 pb-30">
                    <div className="flex gap-6 w-full">
                        <div className="grid content-start gap-6">
                            <div className="grid content-start gap-4 p-4 h-fit whitespace-nowrap rounded-sm bg-evergreen-darker">
                                <button onClick={() => setCurrentCategory("all")} className={`${currentCategory === "all" ? "bg-evergreen-light" : "bg-transparent"} flex items-center gap-2 rounded-sm text-left p-3 hover:bg-evergreen-light`}><LuMenu className="text-xl" /> ALL</button>
                                <button onClick={() => setCurrentCategory("mainDishes")} className={`${currentCategory === "mainDishes" ? "bg-evergreen-light" : "bg-transparent"} flex items-center gap-2 rounded-sm text-left p-3 hover:bg-evergreen-light`}><LuCookingPot className="text-xl" /> MAIN DISHES</button>
                                <button onClick={() => setCurrentCategory("soups")} className={`${currentCategory === "soups" ? "bg-evergreen-light" : "bg-transparent"} flex items-center gap-2 rounded-sm text-left p-3 hover:bg-evergreen-light`}><LuSoup className="text-xl" /> SOUPS</button>
                                <button onClick={() => setCurrentCategory("bakery")} className={`${currentCategory === "bakery" ? "bg-evergreen-light" : "bg-transparent"} flex items-center gap-2 rounded-sm text-left p-3 hover:bg-evergreen-light`}><LuCroissant className="text-xl" /> BAKERY</button>
                                <button onClick={() => setCurrentCategory("dessert")} className={`${currentCategory === "dessert" ? "bg-evergreen-light" : "bg-transparent"} flex items-center gap-2 rounded-sm text-left p-3 hover:bg-evergreen-light`}><LuCakeSlice className="text-xl" /> DESSERT</button>
                                <button onClick={() => setCurrentCategory("drinks")} className={`${currentCategory === "drinks" ? "bg-evergreen-light" : "bg-transparent"} flex items-center gap-2 rounded-sm text-left p-3 hover:bg-evergreen-light`}><LuBeer className="text-xl" /> DRINKS</button>
                            </div>
                            <div className="grid gap-4 p-4 rounded-sm whitespace-nowrap bg-evergreen-darker">
                                <button onClick={() => setCurrentCategory("bundles")} className={`${currentCategory === "bundles" ? "bg-evergreen-light" : "bg-transparent"} flex items-center gap-2 rounded-sm text-left p-3 hover:bg-evergreen-light`}><LuLayers className="text-xl" /> BUNDLES</button>
                                <button onClick={() => setCurrentCategory("specialDeals")} className={`${currentCategory === "specialDeals" ? "bg-evergreen-light" : "bg-transparent"} flex items-center gap-2 rounded-sm text-left p-3 hover:bg-evergreen-light`}><LuSparkles className="text-xl" /> SPECIAL DEALS</button>
                            </div>
                        </div>
                        <div className="grid content-start w-full gap-6">
                            <div className="flex flex-1 rounded-sm outline outline-silver/30 focus-within:outline-metallic-gold text-silver/70 bg-evergreen-darker/50">
                                <span className="grid place-items-center px-4"><LuSearch className="text-xl" /></span>
                                <input
                                    type="text"
                                    placeholder="What would you like to eat?"
                                    onChange={ev => setSearchValue(ev.target.value)}
                                    className="py-4 w-full outline-none placeholder:text-silver/30"
                                />
                            </div>
                            <ul className="grid grid-cols-2 gap-6">{menuElements}</ul>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
            <div className={`${isNotificationShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"} flex gap-2 fixed bottom-6 right-6 transition-all duration-200 rounded-full p-2 px-4 select-none text-green-100 bg-evergreen-darker`}>
                <LuCheck />
                <h2>Successfully added to cart</h2>
            </div>
        </>
    )
}