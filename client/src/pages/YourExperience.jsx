import { useLanguageStore } from "../store.js"

import Header from "../components/Header"
import Footer from "../components/Footer.jsx"
import AllergyDetails from "../components/sections/your_experience/AllergyDetails.jsx"
import Feedback from "../components/sections/your_experience/Feedback.jsx"

export default function YourExperience(props) {

    const language = useLanguageStore(state => state.language)

    return (
        <div id="your-experience">
            <Header cartItems={props.cartItems} setCartItems={props.setCartItems} />
            <main className="grid place-items-center">
                <div className="grid w-[80%]">
                    <AllergyDetails />
                    <Feedback />
                </div>
            </main>
            <Footer />
        </div>
    )
}
