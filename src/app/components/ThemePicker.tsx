"use client"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function ThemePicker() {
    let colors = [
        { name: "orange", code: "#ea580c" },
        { name: "blue", code: "#3b82f6" },
        { name: "green", code: "#22c55e" },
        { name: "rose", code: "#e11d48" },
        { name: "dark", code: "#555" },
        { name: "light", code: "#999" },

    ]

    const { setTheme, themes, resolvedTheme } = useTheme();
    const [darkColors, setDarkColors] = useState([
        "darkOrange",
        "darkBlue",
        "darkRose",
        "darkGreen",
        "dark",
    ]);

    const [lightColors, setLightColors] = useState([
        "orange",
        "blue",
        "green",
        "rose",
        "light",
    ]);

    const selectTheme = (t: string) => {
        let res = resolvedTheme || "";
        if ((darkColors.includes(t) || darkColors.includes(res)) && t !== "light") {
            if (resolvedTheme === "light") {
                setTheme(t);
            }
            if (t === "orange" || resolvedTheme === "orange") setTheme("darkOrange");
            if (t === "blue" || resolvedTheme === "blue") setTheme("darkBlue");
            if (t === "rose" || resolvedTheme === "rose") setTheme("darkRose");
            if (t === "green" || resolvedTheme === "green") setTheme("darkGreen");
        } else if (lightColors.includes(t)) {
            if (resolvedTheme === "dark") setTheme(t);
            if (t === "orange" || resolvedTheme === "darkOrange") setTheme("orange");
            if (t === "blue" || resolvedTheme === "darkBlue") setTheme("blue");
            if (t === "rose" || resolvedTheme === "darkRose") setTheme("rose");
            if (t === "green" || resolvedTheme === "darkGreen") setTheme("green");
        }
    };


    return (

        <Card className="min-h-56">
            <div className="flex justify-evenly m-8">
                <div>
                    Select Theme
                </div>
                <div className="">
                    <Select onValueChange={(value) => selectTheme(value)}>
                        <SelectTrigger className="w-[180px] mx-4" >
                            <SelectValue placeholder="Select Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    colors.map((color: any, index: number) =>
                                        <SelectItem key={index} value={color.name}><div className="flex"><div className="w-5 h-5 rounded-full flex mx-2" style={{ backgroundColor: color.code }}></div><div>{color.name}</div></div></SelectItem>
                                    )
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>





        </Card>

    )
}