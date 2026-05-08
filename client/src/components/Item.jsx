
import { LuPlus, LuX } from "react-icons/lu"
import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function Item(props) {

    const [isClosing, setIsClosing] = useState(false)

    function close() {
        setIsClosing(true)
        setTimeout(() => {
            props.setSelectedItem(null)
            setIsClosing(false)
        }, 400)
    }

    return (
        <div className={`${props.selectedItem !== null && !isClosing ? "opacity-100" : "opacity-0 pointer-events-none"} flex items-center fixed top-1/2 -translate-y-1/2 h-full transition-opacity duration-400 z-50`}>
            <div onClick={close} className="absolute inset-0 bg-black/30"></div>
            <div className="flex justify-center">
                <div className={`${props.selectedItem !== null && !isClosing ? "translate-y-0" : "translate-y-5"} flex transition-transform duration-400 w-[80%] h-[85vh] rounded-sm bg-evergreen-light`}>
                    <img
                        src={props.selectedItem?.imgSrc}
                        alt={props.selectedItem?.imgAlt}
                        className="w-[70%] object-cover rounded-l-sm"
                    />
                    <div className="grid content-between gap-2 p-4">
                        <div className="grid gap-2">
                            <div className="flex justify-between items-start gap-6">
                                <h1 className="font-medium text-2xl">{props.selectedItem?.name}</h1>
                                <button onClick={close} ><LuX className="text-xl" /></button>
                            </div>
                            <p className="text-silver/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur culpa itaque, autem sequi, omnis, nostrum iure assumenda rem cum est reiciendis beatae! Incidunt laboriosam mollitia ad eveniet suscipit doloribus.</p>
                        </div>
                        <div className="grid gap-2">
                            <h2 className="text-2xl">€{props.selectedItem?.price}</h2>
                            <button onClick={() => props.addToCart(props.selectedItem)} className="flex justify-center items-center gap-6 w-full rounded-sm px-6 py-4 font-medium tracking-wider transition-all duration-200 hover:brightness-120 border-b border-metallic-gold bg-metallic-gold/20 text-metallic-gold"><LuPlus className="text-xl" />ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}