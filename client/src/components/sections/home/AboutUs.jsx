
import { useLanguageStore } from "../../../store.js"
import { useInView } from "../../../useInView.js"

import kaunas from "../../../images/kaunas.png"

export default function AboutUs() {

    const language = useLanguageStore(state => state.language)

    const [textRef, textInView] = useInView({ threshold: 0.2 })
    const [imgRef, imgInView] = useInView({ threshold: 0.2 })

    return (
        <section id="about" className="grid xl:flex items-start gap-20 w-[90%] lg:w-[80%] min-h-screen pt-42">
            <div ref={textRef} className={`${textInView ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"} grid content-start gap-12 transition-all duration-600`}>
                <h1 className="font-semibold text-5xl">{language === "lt" ? "Apie mus" : "About us"}</h1>

                <div className="grid gap-2">
                    <h3 className="text-xl font-medium">{language === "lt" ? "Kaip mes susikūrėme?" : "How did we start?"}</h3>
                    <p className="text-silver/70">
                        {language === "lt"
                            ? "2012 metais atsidarėme kaip maža kepyklėlė, kepanti paprastą, tikrą maistą. Šviežia duona, naminiai pyragaičiai, rankų darbo receptai. Vieta, kur žmonės ateidavo įkvėpti, atsipūsti ir pasijusti savi."
                            : "We opened our doors in 2012 as a small bakery focused on fresh bread, pastries, and simple handmade recipes. A cozy place where people stopped in for something warm and familiar."
                        }
                    </p>
                </div>

                <div className="grid gap-2">
                    <h3 className="text-xl font-medium">{language === "lt" ? "Mūsų misija" : "Our mission"}</h3>
                    <p className="text-silver/70">
                        {language === "lt"
                            ? "Kaune siūlome autentišką vokišką virtuvę, išlaikydami tą pačią šilumą, atvirumą ir paprastą kepyklėlės dvasią."
                            : "We're bringing real German food to Kaunas, without losing the cozy, honest feeling we had when we first started as a bakery."
                        }
                    </p>
                </div>

                <div className="grid gap-2">
                    <h3 className="text-xl font-medium">{language === "lt" ? "Mūsų vertybės" : "Our values"}</h3>
                    <p className="text-silver/70">
                        {language === "lt"
                            ? "Šviežūs ingredientai, malonus aptarnavimas, nuoseklumas ir kokybė."
                            : "Fresh ingredients, good customer service, consistency and quality."
                        }
                    </p>
                </div>
            </div>

            <img
                ref={imgRef}
                src={kaunas}
                alt="Kaunas"
                className={`${imgInView ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"} rounded-sm w-[65%] transition-all duration-600`}
            />
        </section>
    )
}