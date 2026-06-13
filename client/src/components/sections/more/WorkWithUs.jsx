
import { useState, useRef } from "react"
import { useLanguageStore } from "../../../store.js"

export default function WorkWithUs() {

    const [selectedFile, setSelectedFile] = useState(null)

    const inputRef = useRef(null)

    const language = useLanguageStore(state => state.language)

    function handleOnChange(ev) {
        if (ev.target.files && ev.target.files.length > 0) {
            setSelectedFile(ev.target.files[0])
        }
    }

    function onChooseFile() {
        inputRef.current.click()
    }

    return (
        <section id="work-with-us" className="flex pt-32 pb-30">
            <div className="grid content-start gap-6 w-[50%]">
                <h1 className="font-semibold text-5xl">{language === "lt" ? "Dirbkite su mumis" : "Work with us"}</h1>
                <p className="text-silver/70 text-lg max-w-[90%]">
                    {language === "lt"
                        ? "Ieškome žmonių, kurie nori prisidėti prie mūsų komandos ir kurti išskirtinę patirtį svečiams. Vertiname profesionalumą, šilumą ir norą augti."
                        : "We're looking for people who want to contribute to our team and help create an exceptional experience for our guests. We value professionalism, warmth, and a desire to grow."
                    }
                </p>
            </div>

            <form className="grid gap-6 w-[50%] p-6 rounded-sm bg-evergreen-darker">
                <div className="grid gap-2 transition-colors duration-200 focus-within:text-metallic-gold">
                    <label htmlFor="fullName" className="w-fit">{language === "lt" ? "Vardas ir pavardė" : "Full name"}</label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder={language === "lt" ? "Jūsų vardas ir pavardė čia" : "Your full name here"}
                        className="peer px-4 py-4 rounded-sm placeholder:text-silver/30 focus:outline-metallic-gold outline outline-silver/30 bg-evergreen-darker/50"
                    />
                </div>

                <div className="grid gap-2 transition-colors duration-200 focus-within:text-metallic-gold">
                    <label htmlFor="email" className="w-fit">{language === "lt" ? "El. paštas" : "Email"}</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={language === "lt" ? "Jūsų el. paštas čia" : "Your email here"}
                        className="peer px-4 py-4 rounded-sm placeholder:text-silver/30 focus:outline-metallic-gold outline outline-silver/30 bg-evergreen-darker/50"
                    />
                </div>

                <div className="grid gap-2 transition-colors duration-200 focus-within:text-metallic-gold">
                    <label htmlFor="tel" className="w-fit">{language === "lt" ? "Telefono numeris" : "Phone number"}</label>
                    <input
                        id="tel"
                        name="tel"
                        inputMode="numeric"
                        type="tel"
                        placeholder={language === "lt" ? "Jūsų telefono numeris čia" : "Your phone number here"}
                        className="peer px-4 py-4 rounded-sm placeholder:text-silver/30 focus:outline-metallic-gold outline outline-silver/30 bg-evergreen-darker/50 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                </div>

                <input
                    onChange={handleOnChange}
                    ref={inputRef}
                    type="file"
                    className="hidden"
                />
                <div onClick={onChooseFile} className="grid place-items-start gap-2 cursor-pointer overflow-hidden truncate w-full rounded-sm px-6 py-4 tracking-wider transition-opacity duration-200 disabled:cursor-no-drop disabled:opacity-60 border-b border-silver/30 bg-evergreen-dark">
                    <button
                        type="button"
                        className="font-medium"
                    >{language === "lt" ? "ĮKELTI CV" : "UPLOAD CV"}
                    </button>
                    <div className="overflow-hidden w-full">
                        <p className="w-full text-sm text-silver/70">{selectedFile === null ? language === "lt" ? "Nepasirinktas failas" : "No file selected" : selectedFile.name}</p>
                    </div>
                </div>

                <button type="button" className="w-full rounded-sm px-6 py-4 font-medium tracking-wider transition-opacity duration-200 disabled:cursor-no-drop disabled:opacity-60 border-b border-metallic-gold bg-metallic-gold/20 text-metallic-gold">
                    {language === "lt" ? "PATEIKTI PARAIŠKĄ" : "SUBMIT APPLICATION"}
                </button>
            </form>
        </section>
    )
}