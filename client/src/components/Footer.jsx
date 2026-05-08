
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import logo from "../images/logo.png"

export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <footer className="flex justify-center w-full py-12 bg-evergreen-darker">
            <div className="flex justify-between items-start w-[80%]">
                <div className="grid gap-12 content-between h-full">
                    <div className="flex justify-between w-full">
                        <img
                            src={logo}
                            alt="Bavaria lounge logo"
                            className="w-35 object-cover select-none"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <a target="_blank" href="https://www.facebook.com/" className="rounded-full p-3 transition-all duration-200 hover:brightness-120 bg-pine-teal/80"><FaFacebookF className="text-xl" /></a>
                        <a target="_blank" href="https://www.instagram.com/" className="rounded-full p-3 transition-all duration-200 hover:brightness-120 bg-pine-teal/80"><FaInstagram className="text-xl" /></a>
                    </div>
                    <p className="text-silver/70">© {currentYear} Bavaria Lounge. All rights reserved.</p>
                </div>
                <div className="w-0.5 rounded-full h-full bg-silver/70"></div>
                <div className="flex gap-24">
                    <div className="grid gap-6 content-start">
                        <h2 className="font-medium text-2xl">Company</h2>
                        <ul className="grid gap-2">
                            <li className="text-silver/70"><a href="#">About us</a></li>
                            <li className="text-silver/70"><a href="#">Partners</a></li>
                            <li className="text-silver/70"><a href="#">Meet our team</a></li>
                            <li className="text-silver/70"><a href="#">Work with us</a></li>
                        </ul>
                    </div>
                    <div className="grid gap-6 content-start">
                        <h2 className="font-medium text-2xl">Your experience</h2>
                        <ul className="grid gap-2">
                            <li className="text-silver/70"><a href="#">Allergy details</a></li>
                            <li className="text-silver/70"><a href="#">Feedback</a></li>
                            <li className="text-silver/70"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="grid gap-6 content-start">
                        <h2 className="font-medium text-2xl">More</h2>
                        <ul className="grid gap-2">
                            <li className="text-silver/70"><a href="#">Special deals</a></li>
                            <li className="text-silver/70"><a href="#">Gift cards</a></li>
                            <li className="text-silver/70"><a href="#">Events</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}