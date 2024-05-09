"use client"
import React from 'react'
import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import Table from "./Table"
import { Button } from "@/components/ui/button"
// import { Button } from "@radix-ui/themes";

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
import ThemePicker from "./ThemePicker"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    PanelLeft,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
    UsersRound,
    Palette,
} from "lucide-react"

function Header() {
    const { setTheme, theme } = useTheme()

    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10" >
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                    href="dashboard"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Dashboard
                </Link>
                <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Orders
                </Link>
                <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Products
                </Link>
                <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Customers
                </Link>
                <Link
                    href="#"
                    className="text-foreground transition-colors hover:text-foreground"
                >
                    Settings
                </Link>
            </nav>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col bg-background sm:flex">
                <TooltipProvider>
                    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                        <Link
                            href="#"
                            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                        >
                            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/profile"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <UsersRound />
                                    <span className="sr-only">Profile</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Profile</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                   <ThemePicker/>
                                   <span className="sr-only">Theme</span> 
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Theme</TooltipContent>
                        </Tooltip>

                    </nav>
                </TooltipProvider>
            </aside>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        // size="1"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Orders
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Products
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Customers
                        </Link>
                        <Link href="#" className="hover:text-foreground">
                            Settings
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 cursor-pointer">
                <div className="ml-auto flex-1 sm:flex-initial">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="sm" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem ><Link href="/profile">Profile</Link></DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            {/* <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"> */}
            <div className="ml-auto flex-1 sm:flex-initial cursor-pointer">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateCSSVariables("rose")}>
                            Rose
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateCSSVariables("green")}>
                            Green
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateCSSVariables("blue")}>
                            Blue
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateCSSVariables("orange")}>
                            Orange
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateCSSVariables("black")}>
                            Black
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <ThemePicker />
            {/* </div> */}

        </header>
    )
}

export default Header