
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu"
import { useLanguageStore } from "../../../store.js"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { useInView } from "../../../useInView.js"

import landscape from "../../../images/landscape.png"

export default function Location() {

    const language = useLanguageStore(state => state.language)

    const [locationRef, locationInView] = useInView({ threshold: 0.2 })

    return (
        <section id="contact" className="grid place-items-center content-start relative w-full min-h-screen pt-42 pb-8 overflow-hidden">
            <img
                src={landscape}
                alt="Kaunas landscape"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-evergreen-dark via-black/60 to-evergreen-dark"></div>
            <div className="flex flex-col items-center gap-6 relative w-[90%] lg:w-[80%] h-141">
                <div ref={locationRef} className={`${locationInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} space-y-2 text-center transition-all duration-600`}>
                    <h1 className="font-semibold text-[clamp(2.6rem,3.4vw,6rem)] leading-none">{language === "lt" ? "Mūsų vieta" : "Our location"}</h1>
                    <p className="text-base md:text-lg text-silver/80">
                        {
                            language === "lt"
                                ? "Mes įsikūrę pačiame Kauno centre, dėl to esame lengvai pasiekiami."
                                : "We're located in the center of Kaunas so we are easy to reach."
                        }
                    </p>
                </div>
                <iframe
                    ref={locationRef}
                    style={{ transitionDelay: "200ms" }}
                    src="https://maps.google.com/maps?hl=en&q=Kaunas&z=12&output=embed"
                    className={`${locationInView ? "opacity-100 scale-100" : "opacity-0 scale-95"} w-full sm:w-fit rounded-sm h-100 aspect-square transition-all duration-600`}
                />
            </div>
        </section>
    )
}