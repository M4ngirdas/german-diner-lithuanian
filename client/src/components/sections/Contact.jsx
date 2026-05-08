
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu"

export default function Contact() {
    return (
        <section id="contact" className="flex gap-6 w-[80%] pt-32 pb-16 h-screen">
            <article className="grid content-start gap-6 w-1/2">
                <div className="grid gap-2 not-italic">
                    <h2 className="text-silver/70">Have any questions?</h2>
                    <h1 className="font-semibold text-5xl">Contact us</h1>
                </div>
                <div className="grid gap-6">
                    <address className="grid content-start w-1/2">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <span className="p-2 rounded-sm bg-evergreen-light"><LuMail className="text-xl" /></span>
                                <p className="">bavaria.lounge@example.com</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="p-2 rounded-sm bg-evergreen-light"><LuPhone className="text-xl" /></span>
                                <p>+49 00 00000000</p>
                            </div>
                        </div>
                    </address>
                    <div className="grid content-start gap-4">
                        <h2 className="text-2xl">Service hours</h2>
                        <ul className="grid gap-4 w-3/5">
                            <li className="flex justify-between pb-2 border-b border-silver/20">Monday <span>8:00 AM - 10:00 PM</span></li>
                            <li className="flex justify-between pb-2 border-b border-silver/20">Tuesday <span>8:00 AM - 10:00 PM</span></li>
                            <li className="flex justify-between pb-2 border-b border-silver/20">Wednesday <span>8:00 AM - 10:00 PM</span></li>
                            <li className="flex justify-between pb-2 border-b border-silver/20">Thursday <span>8:00 AM - 10:00 PM</span></li>
                            <li className="flex justify-between pb-2 border-b border-silver/20">Friday <span>8:00 AM - 10:00 PM</span></li>
                            <li className="flex justify-between pb-2 border-b border-silver/20">Saturday <span>8:00 AM - 8:00 PM</span></li>
                            <li className="flex justify-between text-silver/70">Sunday <span>Closed</span></li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className="flex flex-col gap-6 w-1/2">
                <div className="grid gap-2">
                    <h2 className="text-silver/70">Where to find us?</h2>
                    <h2 className="font-semibold text-5xl">Our location</h2>
                </div>
                <div className="flex flex-col gap-2 h-full">
                    <div className="h-full">
                        <iframe
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?width=668&amp;height=521&amp;hl=en&amp;q=%20Bavaria+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            className="w-full h-full rounded-sm">
                        </iframe>
                    </div>
                    <p className="flex items-center gap-2 h-fit"><LuMapPin className="text-xl" /> Bavaria</p>
                </div>
            </article>
        </section>
    )
}