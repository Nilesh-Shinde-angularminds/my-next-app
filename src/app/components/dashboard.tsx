"use client"
import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import Table from "./Table"
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { updateCSSVariables } from "../HandleTheme";



export default function Dashboard() {
    const { setTheme, theme } = useTheme()
    return (
        <div className="flex min-h-screen w-full flex-col">

            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 container">
                <Table />
            </main>

        </div>
    )
}
