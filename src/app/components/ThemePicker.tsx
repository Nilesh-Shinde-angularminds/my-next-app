import { Button } from "@/components/ui/button"
import { updateCSSVariables } from "../HandleTheme"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Palette } from "lucide-react"

export default function SheetDemo() {

    let colors = [
        { name: "zinc", color: "#52525b" },
        { name: "slate", color: "#475569" },
        { name: "stone", color: "#57534e" },
        { name: "gray", color: "#4b5563" },
        { name: "natural", color: "#525252" },
        { name: "red", color: "#dc2626" },
        { name: "rose", color: "#e11d48" },
        { name: "orange", color: "#ea580c" },
        { name: "green", color: "#22c55e" },
        { name: "blue", color: "#3b82f6" },
        { name: "yellow", color: "#facc15" },
        { name: "violet", color: "#6d28d9" },
    ]
    return (
        <Sheet key="left">
            <SheetTrigger asChild>
                <Palette />
                {/* <span className="sr-only">Theme</span> */}
                {/* <Button variant="outline">Open</Button> */}
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Select Theme Color</SheetTitle>
                </SheetHeader>
                {
                    colors.map((item: any) => {
                        return (
                            <Button key={item.name} variant="outline" onClick={() => updateCSSVariables(item.name)} style={{ backgroundColor: item.color }} className="w-20 m-3">{item.name}</Button>
                        )
                    })
                }
            </SheetContent>
        </Sheet>
    )
}