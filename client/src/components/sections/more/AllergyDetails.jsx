import { useLanguageStore } from "../../../store.js"

export default function AllergyDetails() {

    const language = useLanguageStore(state => state.language)

    return (
        <section id="allergies" className="grid grid-cols-1 lg:grid-cols-2 gap-24 pt-40 pb-40">

            <div className="grid content-start gap-6">
                <h1 className="font-semibold text-5xl">{language === "lt" ? "Alergijos" : "Allergies"}</h1>

                <p className="text-silver/70 max-w-[85%]">
                    {language === "lt"
                        ? "Mes užtikriname, kad kiekvienas svečias jaustųsi saugus ir informuotas."
                        : "We make sure that every guest feels safe and informed."
                    }
                </p>
            </div>

            <div className="grid gap-12 p-12 rounded-sm bg-evergreen-darker">

                <div className="grid gap-3">
                    <h3 className="text-2xl font-medium">
                        {language === "lt" ? "Pagrindiniai alergenai" : "Primary allergens"}
                    </h3>
                    <p className="text-silver/70">
                        {language === "lt"
                            ? "Mūsų patiekaluose gali būti glitimo, riešutų, pieno produktų, kiaušinių, sojos, žuvies ar kitų alergenų. Visi pagrindiniai alergenai yra aiškiai pažymėti meniu."
                            : "Our dishes may contain gluten, nuts, dairy, eggs, soy, fish, or other allergens. All major allergens are clearly marked in the menu."
                        }
                    </p>
                </div>

                <div className="grid gap-3">
                    <h3 className="text-2xl font-medium">
                        {language === "lt" ? "Individualūs poreikiai" : "Individual needs"}
                    </h3>
                    <p className="text-silver/70">
                        {language === "lt"
                            ? "Galime pasiūlyti alternatyvas, rekomenduoti saugiausius patiekalus arba pritaikyti kai kuriuos patiekalus pagal jūsų poreikius."
                            : "We can offer alternatives, recommend the safest dishes, or adjust certain meals to fit your needs."
                        }
                    </p>
                </div>

            </div>
        </section>
    )
}