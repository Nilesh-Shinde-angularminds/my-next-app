export const updateCSSVariables = (/* isDark: boolean, */ className: string) => {
    const root = document.getElementById("layout");
    console.log("root", root, className);
    // root?.className="className" 
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