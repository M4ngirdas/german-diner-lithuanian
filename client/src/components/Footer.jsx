
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { useLanguageStore } from "../store.js"
import { useNavigate } from "react-router-dom"

import logo from "../images/logo.png"
import { LuArrowUpRight, LuCircle, LuClock, LuMail, LuMailCheck, LuMapPin, LuPhone } from "react-icons/lu"

export default function Footer() {

    const navigate = useNavigate()
    const currentYear = new Date().getFullYear()
    const language = useLanguageStore(state => state.language)

    return (
        <footer className="flex justify-center w-full py-12 mt-34 bg-evergreen-darker">
            <div className="flex justify-between items-start w-[90%] lg:w-[80%]">
                <div className="grid w-full">
                    <div className="grid lg:flex lg:justify-between gap-12 w-full pb-12">
                        <div className="grid gap-6 content-start">
                            <h2 className="font-medium text-sm text-silver/70">{language === "lt" ? "KONTAKTAI" : "CONTACTS"}</h2>
                            <ul className="grid gap-2 w-full text-lg">
                                <li className="flex items-center gap-2"><LuMail />bravo.restoranas@example.com</li>
                                <li className="flex items-center gap-2"><LuPhone />+370 000 00000</li>
                            </ul>
                        </div>
                        <hr className="block lg:hidden text-silver/30" />
                        <div className="grid gap-6 content-start">
                            <h2 className="font-medium text-sm text-silver/70">{language === "lt" ? "DARBO LAIKAS" : "OPENING HOURS"}</h2>
                            <ul className="grid gap-2 w-full text-lg">
                                <li className="flex justify-between gap-2 pb-2">I-V <span>09:00 - 22:00</span></li>
                                <li className="flex justify-between pb-2">VI <span>11:00 - 23:00</span></li>
                                <li className="flex justify-between">VII <span>{language === "lt" ? "Nedirbame" : "Closed"}</span></li>
                            </ul>
                        </div>
                        <hr className="block lg:hidden text-silver/30" />
                        <div className="grid gap-6 content-start">
                            <h2 className="font-medium text-sm text-silver/70">{language === "lt" ? "DAUGIAU" : "MORE"}</h2>
                            <ul className="grid gap-2 text-lg">
                                <li>
                                    <a className="flex items-center gap-2">{language === "lt" ? "Apie mus" : "About us"}</a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2">{language === "lt" ? "Atsiliepimai" : "Feedback"}</a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2">{language === "lt" ? "Dirbkite su mumis" : "Work with us"}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="text-silver/30" />
                    <div className="flex justify-between items-end pt-6">
                        <div className="flex items-end gap-6">
                            <p className="text-silver/70">© {currentYear} Bravo restoranas</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <a target="_blank" href="https://www.facebook.com/" className="flex items-center gap-2 rounded-full p-2 transition-colors duration-200 hover:text-metallic-gold hover:bg-metallic-gold/20 text-silver"><FaFacebookF className="text-xl" /></a>
                            <a target="_blank" href="https://www.instagram.com/" className="flex items-center gap-2 rounded-full p-2 transition-colors duration-200 hover:text-metallic-gold hover:bg-metallic-gold/20 text-silver"><FaInstagram className="text-xl" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}