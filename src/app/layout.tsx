"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { hasCookie } from "cookies-next";
import { createContext, useEffect, useState } from "react"


const inter = Inter({ subsets: ["latin"] });
export const AuthContext = createContext({})
import { useRouter, usePathname } from 'next/navigation';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // const [authenticated, setAuthenticated] = useState(Boolean(hasCookie("authToken")))

  // useEffect(() => {
  //   let cookiess = hasCookie("authToken")
  //   setAuthenticated(Boolean(cookiess))
  // }, [hasCookie("authToken"), authenticated])


  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={[
            "light",
            "dark",
            "orange",
            "rose",
            "green",
            "blue",
            "darkBlue",
            "darkOrange",
            "darkRose",
            "darkGreen",
          ]}
        >
          {/* {pathname && !pathname.includes("auth") && <Header />}
          {children}
          {pathname && !pathname.includes("auth") && <Footer />} */}

          <div className={`${pathname && !pathname.includes("auth") ? "flex min-h-screen w-full flex-col" : ""}`}>
            {pathname && !pathname.includes("auth") && <Header />}
            <main className={`${pathname && !pathname.includes("auth") ? "flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 container" : ""}`}>
              {children}
            </main>
            {pathname && !pathname.includes("auth") && <Footer />}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
