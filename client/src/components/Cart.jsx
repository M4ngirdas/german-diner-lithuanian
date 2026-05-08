
import { useNavigate } from "react-router-dom"
import { LuChevronDown, LuChevronRight, LuChevronUp, LuInfo, LuPackageOpen, LuShoppingCart, LuTrash, LuTrash2, LuX } from "react-icons/lu"

export default function Cart(props) {

    const navigate = useNavigate()
    const cartItemsPriceArray = props.cartItems.map(item => (item.price * item.quantity))
    let total = 0

    for (const item of cartItemsPriceArray) {
        total += item
    }

    function removeFromCart(id) {
        props.setCartItems(prev => prev.filter(item => id !== item.id))
    }

    function quantityIncrease(id) {
        props.setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }

    function quantityDecrease(id) {
        props.setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    }

    const cartElements = props.cartItems.map(item => (
        <li key={item.id} className="flex gap-2 rounded-sm h-30 bg-evergreen-dark">
            <img className="select-none w-2/5 h-full rounded-l-sm object-cover" src={item.imgSrc} alt={item.imgAlt} />
            <div className="flex justify-between gap-2 w-full p-4">
                <div className="grid content-between gap-2 w-full">
                    <h2 className="flex gap-2 font-medium"><span>{item.name}</span></h2>
                    <div className="flex gap-2 w-fit rounded-sm">
                        <p className="flex gap-2 text-silver/70">€{item.price * item.quantity}</p>
                        <div className="flex gap-2 px-2 rounded-sm w-20 h-fit bg-evergreen-light">
                            <button
                                disabled={item.quantity === 10}
                                onClick={() => quantityIncrease(item.id)}
                                className="text-xl disabled:cursor-no-drop disabled:text-silver/30"
                            ><LuChevronUp />
                            </button>
                            <p>{item.quantity}</p>
                            <button
                                disabled={item.quantity === 1}
                                onClick={() => quantityDecrease(item.id)}
                                className="text-xl disabled:cursor-no-drop disabled:text-silver/30"
                            ><LuChevronDown />
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="grid place-items-center rounded-sm w-10 h-10 text-xl transition-all duration-200 hover:bg-red-500"><LuTrash2 /></button>
            </div>
        </li>
    ))

    return (
        <>
            <div onClick={() => props.setIsCartOpen(false)} className={`${props.isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"} z-50 transition-opacity duration-200 fixed inset-0 bg-black/30`}></div>
            <div className={`${props.isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"} grid gap-6 w-md absolute right-0 rounded-sm transition-opacity duration-200 z-50 bg-evergreen-light`}>
                <div className="flex justify-between p-4 bg-evergreen-dark/50">
                    <h2 className="flex items-center gap-2 text-2xl">Cart</h2>
                    <span onClick={() => props.setIsCartOpen(false)} className="rounded-sm p-2 text-xl cursor-pointer hover:bg-evergreen-dark">
                        <LuX />
                    </span>
                </div>
                <div className="grid">
                    {props.cartItems.length === 0 ? <div className="grid place-items-center gap-2">
                        <span className="text-silver/70 text-4xl"><LuInfo /></span>
                        <h2 className="text-silver/70">Your cart is empty.</h2>
                    </div> : null}
                    <div className={`${props.cartItems.length > 0 ? "" : "p-4"} grid gap-6`}>
                        <ul className={`${props.cartItems.length > 3 ? "w-full h-90 overflow-y-scroll pr-2" : ""} flex flex-col gap-6 px-4`}>{cartElements}</ul>
                        {props.cartItems.length > 0 ? <div className="grid gap-4 p-4 bg-evergreen-dark/50">
                            <p>Total €{total}</p>
                            <button className="group flex justify-between items-center gap-6 rounded-sm px-6 py-4 font-medium tracking-wider transition-all duration-200 hover:brightness-120 border-b border-metallic-gold bg-metallic-gold/20 text-metallic-gold">CHECKOUT<LuChevronRight className="text-xl text-metallic-gold transition-transform duration-500 group-hover:rotate-360" /></button>
                        </div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}