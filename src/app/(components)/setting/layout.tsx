"use client"
import Link from "next/link"


import { useState } from "react"
import { usePathname } from 'next/navigation';



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname();

    return (
        <div className="flex min-h-screen w-full flex-col">
            <div className="mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-semibold mb-3">Settings</h1>
            </div>
            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <nav
                    className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
                >
                    <Link href="/setting/profile" className={`${pathname.includes('profile') ? "font-semibold text-primary" : ""}`}>
                        Profile
                    </Link>
                    <Link href="/setting/theme" className={`${pathname.includes('theme') ? "font-semibold text-primary" : ""}`}>Theme</Link>
                    <Link href="/setting/reset-password" className={`${pathname.includes('reset-password') ? "font-semibold text-primary" : ""}`}>Reset password</Link>

                </nav>
                <div className="grid gap-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
