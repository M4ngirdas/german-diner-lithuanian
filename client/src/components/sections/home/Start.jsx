
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LuChevronDown, LuChevronRight } from "react-icons/lu"
import { useLanguageStore } from "../../../store.js"
import { useInView } from "../../../useInView.js"

import hero from "../../../images/hero.png"

export default function Start(props) {

    const [specialDeals, setSpecialDeals] = useState(
        { weekendSpecial: true, pretzelDeal: false, coffeeDeal: false }
    )

    const navigate = useNavigate()
    const language = useLanguageStore(state => state.language)

    const [startRef, startInView] = useInView({ threshold: 0.2 })

    return (
        <section className="grid content-start gap-6 pt-42 w-[90%] lg:w-[80%] min-h-screen">
            <div ref={startRef} className={`${startInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} grid gap-6 transition-all duration-600`}>
                <div className="leading-tight">
                    <h1 className="flex font-semibold text-[clamp(2.2rem,3.2vw,6rem)]">{language === "lt" ? <span>Vokiškas maistas <br className="block sm:hidden" /> kuris palieka įspūdį.</span> : <span>German food that <br className="block sm:hidden" /> leaves an impression.</span>}</h1>
                    <h2 className="text-silver/70 text-base md:text-lg">
                        {
                            language === "lt"
                                ? "Rezervuokite staliuką arba peržiūrėkite mūsų meniu ir užsisakykite iš anksto."
                                : "Reserve a table or explore our menu and pre-order for your visit."
                        }
                    </h2>
                </div>
                <div className="flex flex-col-reverse sm:flex-row gap-4 text-sm md:text-base">
                    <a href="#reservation" className="group flex justify-center items-center gap-6 rounded-sm px-6 py-4 font-medium tracking-wider transition-all duration-200 hover:brightness-120 bg-pine-teal/50 text-silver"><LuChevronDown className="text-xl transition-transform duration-500 group-hover:rotate-360" /> {language === "lt" ? "REZERVUOTI STALIUKĄ" : "RESERVE A TABLE"}</a>
                    <button onClick={() => navigate("/categories")} className="group flex justify-center items-center gap-6 rounded-sm px-6 py-4 font-medium tracking-wider transition-all duration-200 hover:brightness-120 border-b border-metallic-gold bg-metallic-gold/20 text-metallic-gold">{language === "lt" ? "PERŽIŪRĖTI VALGIARAŠTĮ" : "EXPLORE OUR MENU"}<LuChevronRight className="text-xl text-metallic-gold transition-transform duration-500 group-hover:rotate-360" /></button>
                </div>
            </div>
            <img
                ref={startRef}
                src={hero}
                alt="Pot roast"
                className={`${startInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} h-90 w-full object-cover rounded-sm select-none overflow-hidden transition-all duration-600`}
            />
        </section>
    )
}