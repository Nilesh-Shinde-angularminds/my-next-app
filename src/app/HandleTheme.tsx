import { getCookie, hasCookie, setCookie } from "cookies-next";
export const updateCSSVariables = (/* isDark: boolean, */ className: any) => {

    const root = document.getElementById("layout");
    setCookie("theme",className)
    
    let allThemes = [
        "zinc",
        "slate",
        "stone",
        "gray",
        "natural",
        "red",
        "rose",
        "orange",
        "green",
        "blue",
        "yellow",
        "violet",
    ]
    allThemes.forEach((item) => {
        root?.classList.remove(item)
    })

    root?.classList.add(className);




};