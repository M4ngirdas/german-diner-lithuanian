
import {
  LuMenu,
  LuCookingPot,
  LuSoup,
  LuCroissant,
  LuCakeSlice,
  LuBeer,
  LuSparkle
} from "react-icons/lu"


export const categoriesData = [
    {
        category: "all",
        name: { lt: "VISKAS", en: "ALL" },
        icon: LuMenu
    },
    {
        category: "mainDishes",
        name: { lt: "PAGRINDINIAI", en: "MAIN DISHES" },
        icon: LuCookingPot
    },
    {
        category: "soups",
        name: { lt: "SRIUBOS", en: "SOUPS" },
        icon: LuSoup
    },
    {
        category: "bakery",
        name: { lt: "BANDELĖS", en: "BAKERY" },
        icon: LuCroissant
    },
    {
        category: "dessert",
        name: { lt: "DESERTAI", en: "DESSERT" },
        icon: LuCakeSlice
    },
    {
        category: "drinks",
        name: { lt: "GĖRIMAI", en: "DRINKS" },
        icon: LuBeer
    },
    {
        category: "specialDeals",
        name: { lt: "SPEC. PASIŪLYMAI", en: "SPECIAL DEALS" },
        icon: LuSparkle
    }
]