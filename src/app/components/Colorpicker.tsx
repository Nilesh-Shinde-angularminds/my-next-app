"use client"
import React, { useState } from 'react';

import {
    CheckIcon,
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { Skeleton } from "@/components/ui/skeleton"
// import { Theme, themes } from "@/registry/themes"
import { themes } from '@/hooks/Thems'

// import "@/styles/mdx.css"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip"

const MyComponent = () => {
    const [config, setConfig] = useConfig()
    const { resolvedTheme: mode } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="mr-2 hidden items-center space-x-0.5 lg:flex">
            <TooltipProvider>
                {mounted ? (
                    <>
                        {["zinc", "rose", "blue", "green", "orange"].map((color) => {
                            const theme = themes.find((theme) => theme.name === color)
                            const isActive = config.theme === color

                            if (!theme) {
                                return null
                            }

                            return (

                                <Tooltip key={theme.name}>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={() => {
                                                setConfig({
                                                    ...config,
                                                    theme: theme.name,
                                                });
                                            }
                                            }
                                            className={cn(
                                                "flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs",
                                                isActive
                                                    ? "border-[--theme-primary]"
                                                    : "border-transparent"
                                            )}
                                            style={
                                                {
                                                    "--theme-primary": `hsl(${theme?.activeColor[
                                                        mode === "dark" ? "dark" : "light"
                                                    ]
                                                        })`,
                                                } as React.CSSProperties
                                            }
                                        >
                                            <span
                                                className={cn(
                                                    "flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]"
                                                )}
                                            >
                                                {isActive && (
                                                    <CheckIcon className="h-4 w-4 text-white" />
                                                )}
                                            </span>
                                            <span className="sr-only">{theme.label}</span>
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        align="center"
                                        className="rounded-[0.5rem] bg-zinc-900 text-zinc-50"
                                    >
                                        {theme.label}
                                    </TooltipContent>
                                </Tooltip>

                            )
                        })}
                    </>
                ) : (
                    <div className="mr-1 flex items-center gap-4">
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                    </div>
                )}
            </TooltipProvider>
        </div>
    );
};

export default MyComponent;




