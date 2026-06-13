
import { create } from "zustand"

export const useLanguageStore = create(
    set => ({
        language: localStorage.getItem("language"),
        setLanguage: () => {
            set(state => ({
                language: state.language === "lt" ? "en" : "lt"
            }))
        }
    })
)