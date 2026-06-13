
import { useLanguageStore } from "../store.js"
import { LuX } from "react-icons/lu"

import lithuaniaFlag from "../images/flags/lithuania.png"
import usaFlag from "../images/flags/usa.png"

export default function Sidebar(props) {

    const language = useLanguageStore(state => state.language)

    return (
        <>
            <div onClick={() => props.setIsSidebarShown(false)} className={`${props.isSidebarShown ? "opacity-100 md:hidden" : "opacity-0 pointer-events-none"} fixed inset-0 z-49 transition-opacity duration-200 bg-black/40`}></div>
            <div className={`${props.isSidebarShown ? "translate-x-0 md:hidden" : "translate-x-full pointer-events-none"} p-6 fixed right-0 w-2/3 sm:w-1/2 h-full transition-all duration-200 z-50 bg-pine-teal`}>
                <button onClick={() => props.setIsSidebarShown(false)} className="absolute right-6 p-2 rounded-sm hover:bg-evergreen-light"><LuX className="text-xl" /></button>
                <nav className="grid gap-6 pb-6 text-lg">{props.renderItems()}</nav>
                <hr className="text-silver/30" />
                <button onClick={props.changeLanguage} className="flex items-center gap-2 text-lg pt-6">
                    <img
                        src={language === "lt" ? lithuaniaFlag : usaFlag}
                        alt={language === "lt" ? "Lithuania flag" : "USA flag"}
                        className="w-5"
                    />
                    {language === "lt" ? "LT" : "EN"}
                </button>
            </div>
        </>
    )
}