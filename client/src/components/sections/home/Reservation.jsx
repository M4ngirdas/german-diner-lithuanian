
import { useState, useRef } from "react"
import { fourSeatTablesData, twoSeatTablesData } from "../../../data/tables.js"
import { LuCalendar, LuCalendar1, LuCheck, LuClock, LuLoaderCircle, LuUser } from "react-icons/lu"
import { useLanguageStore } from "../../../store.js"
import { useInView } from "../../../useInView.js"
import { registerLocale } from "react-datepicker"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import lt from "date-fns/locale/lt"
import enGB from "date-fns/locale/en-GB"
import reservation from "../../../images/reservation.png"

registerLocale("lt", lt)
registerLocale("en-GB", enGB)

export default function Reservation() {

    const [tables, setTables] = useState({ fourSeatTables: fourSeatTablesData, twoSeatTables: twoSeatTablesData })
    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [guestCountValue, setGuestCountValue] = useState("2")
    const [timeValue, setTimeValue] = useState("09:00")

    const [tableSelectionRef, tableSelectionInView] = useInView({ threshold: 0.2 })

    const language = useLanguageStore(state => state.language)
    const selectedTable = [...tables.fourSeatTables, ...tables.twoSeatTables].find(table => table.selected)
    const inputClass = "px-2 py-4 rounded-sm transition-colors duration-200 outline outline-transparent focus:outline-metallic-gold placeholder:text-silver/30 bg-evergreen-dark/80"

    async function confirmReservation(ev) {
        ev.preventDefault()
        setIsLoading(true)
        const response = await fetch("http://localhost:5000/api/reserve", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nameValue, emailValue, selectedTable
            })
        })

        const data = await response.json()
        setSuccess(data.success ? true : false)
        setIsLoading(false)
    }

    function handleSelect(table, group) {
        setTables(prev => ({
            fourSeatTables: prev.fourSeatTables.map(selectedTable => ({
                ...selectedTable, selected: group === "fourSeatTables" && selectedTable.id === table.id
                    ? !selectedTable.selected
                    : false
            })),
            twoSeatTables: prev.twoSeatTables.map(selectedTable => ({
                ...selectedTable, selected: group === "twoSeatTables" && selectedTable.id === table.id
                    ? !selectedTable.selected
                    : false
            }))
        }))
    }

    function renderTables(table, group) {
        return (
            <button
                key={table.id}
                onClick={() => handleSelect(table, group)}
                className={`${table.selected ? "border-metallic-gold" : "border-transparent"} flex gap-2 shrink-0 w-fit p-2 rounded-sm transition-all duration-200 hover:brightness-120 border bg-evergreen-light/15`}
            >
                {group === "fourSeatTables" && (
                    <div className="grid grid-cols-3 gap-2 aspect-square">
                        <div></div>
                        <div className="grid place-items-center w-10 h-10 rounded-sm bg-evergreen-light"></div>
                        <div></div>

                        <div className="grid place-items-center w-10 h-10 rounded-sm bg-evergreen-light"></div>
                        <p className="grid place-items-center w-10 h-10 text-lg rounded-sm bg-pine-teal">
                            {table.id}
                        </p>
                        <div className="grid place-items-center w-10 h-10 rounded-sm bg-evergreen-light"></div>

                        <div></div>
                        <div className="grid place-items-center w-10 h-10 rounded-sm bg-evergreen-light"></div>
                        <div></div>
                    </div>
                )}

                {group === "twoSeatTables" && (
                    <div className="flex gap-2 w-full h-10">
                        <div className="grid place-items-center w-10 rounded-sm bg-evergreen-light"></div>
                        <p className="grid place-items-center text-lg w-10 rounded-sm bg-pine-teal">
                            {table.id}
                        </p>
                        <div className="grid place-items-center rounded-sm w-10 bg-evergreen-light"></div>
                    </div>
                )}
            </button>
        )
    }

    const twoSeatTableElements = tables.twoSeatTables.map(table =>
        renderTables(table, "twoSeatTables")
    )

    const fourSeatTableElements = tables.fourSeatTables.map(table =>
        renderTables(table, "fourSeatTables")
    )

    return (
        <section id="reservation" className="flex gap-6 relative w-[90%] lg:w-[80%] min-h-screen pt-42 pb-8">
            <div ref={tableSelectionRef} className={`${tableSelectionInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} w-1/2 leading-tight transition-all duration-600`}>
                <h1 className="font-semibold text-[clamp(2.2rem,3.2vw,6rem)] text-metallic-gold">{language === "lt" ? "Rezervacija" : "Reservation"}</h1>
                <p className="text-base md:text-lg text-silver/70">
                    {
                        language === "lt"
                            ? "Planuojate apsilankyti? Rezervuokite staliuką iš anksto. Patvirtinę rezervaciją į savo el. paštą gausite pranešimą dėl jūsų rezervacijos."
                            : "Planning to visit? Reserve a table in advance. Once your reservation is confirmed, you will receive a notification regarding your reservation in your email."
                    }
                </p>
            </div>
            <form
                ref={tableSelectionRef}
                onSubmit={confirmReservation}
                className={`${tableSelectionInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-x-5"} grid content-start h-fit gap-6 p-6 w-1/2 duration-600 rounded-sm text-sm md:text-base bg-evergreen-darker`}
            >
                    <div className="grid gap-2 w-full transition-colors duration-200 focus-within:text-metallic-gold">
                    <label htmlFor="name" className="w-fit">{language === "lt" ? "Vardas" : "Name"}</label>
                    <input
                        onChange={ev => setNameValue(ev.target.value)}
                        id="name"
                        name="name"
                        type="text"
                        placeholder={language === "lt" ? "Jūsų vardas čia" : "Your name here"}
                        className={inputClass}
                    />
                </div>
                <div className="grid gap-2 w-full transition-colors duration-200 focus-within:text-metallic-gold">
                    <label htmlFor="email" className="w-fit">{language === "lt" ? "El. paštas" : "Email"}</label>
                    <input
                        onChange={ev => setEmailValue(ev.target.value)}
                        id="email"
                        name="email"
                        type="email"
                        placeholder={language === "lt" ? "Jūsų el. paštas čia" : "Your email here"}
                        className={inputClass}
                    />
                </div>
                <div className="grid lg:flex gap-6 w-full">
                    <div className="grid gap-2 w-full">
                        <label htmlFor="">{language == "lt" ? "Data" : "Date"}</label>
                        <div onClick={() => setIsCalendarOpen(true)} className={`${inputClass} flex items-center gap-2 w-full`}>
                            <LuCalendar className="text-xl" />
                            <DatePicker
                                id="date"
                                onClickOutside={() => setIsCalendarOpen(false)}
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                dateFormat="yyyy-MM-dd"
                                minDate={new Date()}
                                filterDate={date => date.getDay() !== 0}
                                locale={language === "lt" ? "lt" : "en-GB"}
                                className="outline-none cursor-pointer select-none"
                            />
                        </div>
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="">{language === "lt" ? "Laikas" : "Time"}</label>
                        <div className="relative w-full">
                            <div className={`${inputClass} flex items-center gap-2`}>
                                <LuClock className="text-xl" />
                                <span className="whitespace-nowrap">{timeValue}</span>
                            </div>
                            <select
                                value={timeValue}
                                onChange={ev => setTimeValue(ev.target.value)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            >
                                {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"].map(item =>
                                    <option
                                        key={item}
                                        value={item}
                                        className="bg-evergreen-dark text-silver"
                                    >
                                        {item}
                                    </option>
                                )}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid content-start gap-2 w-full">
                    <label htmlFor="">{language === "lt" ? "Svečių skaičius" : "Number of guests"}</label>
                    <div className="relative w-full">
                        <div className={`${inputClass} flex items-center gap-2`}>
                            <LuUser className="text-xl" />
                            <span className="whitespace-nowrap">
                                {guestCountValue} {guestCountValue === "1" ? language === "lt" ? "svečias" : "guest" : guestCountValue === "10" ? language === "lt" ? "svečių" : "guests" : language === "lt" ? "svečiai" : "guests"}
                            </span>
                        </div>
                        <select
                            value={guestCountValue}
                            onChange={ev => setGuestCountValue(ev.target.value)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        >
                            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item =>
                                <option
                                    key={item}
                                    value={item}
                                    className="bg-evergreen-dark text-silver"
                                >
                                    {item} {item === "1" ? language === "lt" ? "svečias" : "guest" : item === "10" ? language === "lt" ? "svečių" : "guests" : language === "lt" ? "svečiai" : "guests"}
                                </option>
                            )}
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={selectedTable === undefined || nameValue.length <= 0 || emailValue.length < 3 || !emailValue.includes("@") || isLoading}
                    className="w-full rounded-sm px-6 py-4 font-medium tracking-wider transition-opacity duration-200 disabled:cursor-no-drop disabled:opacity-60 border-b border-metallic-gold bg-metallic-gold/20 text-metallic-gold"
                >
                    {isLoading ? <span className="flex justify-center items-center gap-2"><LuLoaderCircle className="text-xl animate-spin" /> {language === "lt" ? "VYKDOMA" : "LOADING"}</span> : language === "lt" ? "PATVIRTINTI REZERVACIJĄ" : "CONFIRM RESERVATION"}
                </button>
            </form>
            <div className={`${success ? "opacity-100 translate-y-0 z-20" : "opacity-0 -translate-y-5 -z-50 pointer-events-none"} flex items-center gap-4 fixed left-1/2 top-1/2 -translate-1/2 z-50 rounded-sm h-fit transition-all duration-400 bg-evergreen-light`}>
                <span className="grid place-items-center p-2 rounded-sm text-metallic-gold"><LuCheck size={30} /></span>
                <div>
                    <h1 className="font-medium">{language === "lt" ? "Rezervacija patvirtinta" : "Reservation confirmed"}</h1>
                    <p className="text-sm text-silver/70">{language === "lt" ? "Patikrinkite el. paštą dėl daugiau informacijos." : "Check your email for details."}</p>
                </div>
            </div>
        </section >
    )
}