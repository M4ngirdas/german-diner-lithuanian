
import { useState } from "react"
import { LuPlus, LuX } from "react-icons/lu"
import { useLocation } from "react-router-dom"
import { useLanguageStore } from "../store.js"

export default function Item(props) {

    const [isClosing, setIsClosing] = useState(false)

    const language = useLanguageStore(state => state.language)

    function close() {
        setIsClosing(true)
        setTimeout(() => {
            props.setSelectedItem(null)
            setIsClosing(false)
        }, 400)
    }

    return (
        <div className={`${props.selectedItem && !isClosing ? "opacity-100" : "opacity-0 pointer-events-none"} fixed inset-0 flex items-center justify-center transition-opacity duration-200 z-50`}>
            <div onClick={close} className="absolute inset-0 bg-black/40"></div>
            <div className={`${props.selectedItem && !isClosing ? "scale-100" : "scale-95"} relative w-[65%] h-[90vh] rounded-md overflow-hidden shadow-2xl transition-transform duration-200 flex flex-col`}>
                <div className="relative w-full h-[70%]">
                    <img
                        src={props.selectedItem?.imgSrc}
                        alt={language === "lt" ? props.selectedItem?.imgAlt?.lt : props.selectedItem?.imgAlt?.en}
                        className="select-none absolute inset-0 w-full h-full object-cover"
                    />
                    <button onClick={close} className="absolute top-4 right-4 p-2 rounded-sm transition-all duration-200 hover:brightness-120 bg-evergreen-light"><LuX className="text-xl" /></button>
                </div>
                <div className="grid gap-4 flex-1 p-6 bg-evergreen-light">
                    <h1 className="text-4xl font-semibold">{language === "lt" ? props.selectedItem?.name.lt : props.selectedItem?.name.en}</h1>
                    <p className="text-silver/80">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur culpa itaque,
                        autem sequi, omnis, nostrum iure assumenda rem cum est reiciendis beatae.
                    </p>
                    <h2 className="text-xl">€{props.selectedItem?.price}</h2>
                </div>
            </div>
        </div>
    )
}