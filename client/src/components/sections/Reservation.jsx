
import { useState } from "react"
import { fourSeatTablesData, twoSeatTablesData } from "../../data/tables.js"
import { LuCheck, LuLoaderCircle } from "react-icons/lu"

export default function Reservation() {

    const [tables, setTables] = useState({ fourSeatTables: fourSeatTablesData, twoSeatTables: twoSeatTablesData })
    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const selectedTable = [...tables.fourSeatTables, ...tables.twoSeatTables].find(table => table.selected)

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
                className={`${table.selected ? "border-metallic-gold" : "border-transparent"} ${group === "verticalTables" ? "grid" : "flex"} flex gap-2 p-2 w-fit rounded-sm transition-all duration-200 hover:brightness-120 border bg-evergreen-light/15`}
            >
                {group === "fourSeatTables" ? (
                    <div className="grid grid-cols-3 gap-2">
                        <div></div>
                        <div className="grid place-items-center w-11 h-11 rounded-sm bg-evergreen-light"></div>
                        <div></div>
                        <div className="grid place-items-center w-11 h-11 rounded-sm bg-evergreen-light"></div>
                        <div className="grid place-items-center text-xs w-11 h-11 rounded-sm bg-pine-teal">Table <br /> {table.id}</div>
                        <div className="grid place-items-center w-11 h-11 rounded-sm bg-evergreen-light"></div>
                        <div></div>
                        <div className="grid place-items-center w-11 h-11 rounded-sm bg-evergreen-light"></div>
                        <div></div>
                    </div>

                ) : null}
                {group === "twoSeatTables" ? (
                    <>
                        <div className="grid place-items-center w-11 h-11 rounded-sm bg-evergreen-light"></div>
                        <div className="grid place-items-center text-xs w-11 h-11 rounded-sm bg-pine-teal">Table <br /> {table.id}</div>
                        <div className="grid place-items-center w-11 h-11 rounded-sm bg-evergreen-light"></div>
                    </>
                ) : null}
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
        <section id="reservation" className="flex gap-16 w-[80%] pt-32 pb-16 h-screen">
            <aside className="flex flex-col gap-12">
                <div className="grid content-start gap-2 h-fit">
                    <h1 className="font-semibold text-5xl text-metallic-gold">Reservation</h1>
                    <h2 className="text-silver/70">Click on a table to select it.</h2>
                </div>
                <form onSubmit={confirmReservation} className="grid content-end gap-6 h-full">
                    <div className="grid gap-6">
                        <div className="grid gap-4">
                            <div className="grid gap-2 transition-colors duration-200 focus-within:text-metallic-gold">
                                <label htmlFor="name" className="w-fit">Name</label>
                                <input
                                    onChange={ev => setNameValue(ev.target.value)}
                                    id="name"
                                    name="name"
                                    type="name"
                                    placeholder="Your name here"
                                    className="peer px-2 py-4 rounded-sm placeholder:text-silver/30 focus:outline-metallic-gold outline outline-silver/30 bg-evergreen-darker/50"
                                />
                            </div>
                            <div className="grid gap-2 transition-colors duration-200 focus-within:text-metallic-gold">
                                <label htmlFor="email" className="w-fit">Email</label>
                                <input
                                    onChange={ev => setEmailValue(ev.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your email here"
                                    className="px-2 py-4 rounded-sm placeholder:text-silver/30 focus:outline-metallic-gold outline outline-silver/30 bg-evergreen-darker/50"
                                />
                            </div>
                        </div>
                        <p className={`${selectedTable === undefined ? "text-silver/70" : "text-silver"}`}>{selectedTable === undefined ? "No table selected." : `Selected: Table ${selectedTable.id}, Seats ${selectedTable.seats}`}</p>
                        <button type="submit" disabled={selectedTable === undefined || nameValue.length <= 0 || emailValue.length < 3 || !emailValue.includes("@") || isLoading} className="w-full rounded-sm px-6 py-4 font-medium tracking-wider transition-opacity duration-200 disabled:cursor-no-drop disabled:opacity-60 border-b border-metallic-gold bg-metallic-gold/20 text-metallic-gold">{isLoading ? <span className="flex justify-center items-center gap-2"><LuLoaderCircle className="text-xl animate-spin" /> LOADING</span> : "CONFIRM RESERVATION"}</button>
                    </div>
                    <div className={`${success ? "opacity-100 translate-y-0 z-20" : "opacity-0 -translate-y-5 -z-50"} flex items-center gap-4 rounded-sm px-3 py-6 h-fit transition-all duration-400 bg-evergreen-light`}>
                        <span className="grid place-items-center p-2 rounded-sm text-metallic-gold"><LuCheck size={30} /></span>
                        <div>
                            <h1 className="font-medium">Reservation confirmed</h1>
                            <p className="text-sm text-silver/70">Check email for details.</p>
                        </div>
                    </div>
                </form>
            </aside>
            <article className="grid p-4 rounded-sm w-full bg-evergreen-darker">
                <div className="flex gap-8">
                    <div className="grid content-between">
                        <div className="flex gap-12">{fourSeatTableElements}</div>
                        <div className="grid grid-cols-3 gap-12 h-full">{twoSeatTableElements}</div>
                        <p className="flex w-full justify-center tracking-widest select-none rounded-sm h-fit bg-evergreen-dark">Window</p>
                    </div>
                    <div className="grid content-between gap-4 flex-1">
                        <div className="flex justify-center tracking-widest select-none p-4 rounded-sm bg-evergreen-dark">Checkout</div>
                        <p className="text-center rounded-sm select-none tracking-widest bg-evergreen-dark">Entrance</p>
                    </div>
                </div>
            </article>
        </section >
    )
}