
import { useState } from "react"
import { useLanguageStore } from "../../../store.js"
import { LuStar } from "react-icons/lu"
import { feedbackData } from "../../../data/feedback.js"

export default function Feedback() {

    const language = useLanguageStore(state => state.language)
    const [rating, setRating] = useState(0)

    const feedbackElements = feedbackData.map((item, index) => (
        <div key={index} className={`${index !== 0 ? "border-t pt-4" : ""} grid gap-2 border-silver/30`}>
            <div className="flex gap-2">
                <h1 className="text-xl font-medium">{item.name}</h1>
                <div className="flex items-center gap-2">
                    <LuStar className="text-xl stroke-metallic-gold fill-metallic-gold" />
                    {item.rating >= 2 ? <LuStar className="text-xl stroke-metallic-gold fill-metallic-gold" /> : null}
                    {item.rating >= 3 ? <LuStar className="text-xl stroke-metallic-gold fill-metallic-gold" /> : null}
                    {item.rating >= 4 ? <LuStar className="text-xl stroke-metallic-gold fill-metallic-gold" /> : null}
                    {item.rating === 5 ? <LuStar className="text-xl stroke-metallic-gold fill-metallic-gold" /> : null}
                </div>
            </div>
            <p className="text-silver/70">{item.message}</p>
        </div>
    ))

    return (
        <section id="feedback" className="flex pt-40 pb-40">
            <div className="grid content-start gap-8 w-[30%]">
                <div className="grid gap-2">
                    <h1 className="font-semibold text-5xl">{language === "lt" ? "Atsiliepimai" : "Feedback"}</h1>
                    <p className="text-silver/70 leading-relaxed max-w-[85%]">
                        {language === "lt"
                            ? "Jūsų atsiliepimai padeda mums tobulėti."
                            : "Your feedback helps us improve."
                        }
                    </p>
                </div>
            </div>
            <article className="grid gap-6 w-[70%] p-6 rounded-sm bg-evergreen-darker">
                <div className="grid gap-6">{feedbackElements}</div>
                <div className="flex gap-2">
                    <button className="w-1/2 rounded-sm px-6 py-4 font-medium tracking-wider transition-all duration-200 hover:brightness-120 bg-pine-teal/50 text-silver">{language === "lt" ? "PERŽIŪRĖTI DAUGIAU" : "SEE MORE"}</button>
                    <button className="w-1/2 rounded-sm px-6 py-4 font-medium tracking-wider transition-all duration-200 hover:brightness-120 border-b border-metallic-gold bg-metallic-gold/20 text-metallic-gold">{language === "lt" ? "PALIKTI ATSILIEPIMĄ" : "LEAVE A REVIEW"}</button>
                </div>
            </article>
        </section>
    )
}