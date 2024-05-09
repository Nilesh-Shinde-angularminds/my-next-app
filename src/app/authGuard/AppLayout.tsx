import React, { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
interface PrivateRouteProps {
    children: ReactNode;
  }

const  AppLayout:React.FC<PrivateRouteProps> =({children})=> {
  return (
    <div className="flex min-h-screen w-full flex-col">
    <Header />
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 container">
      {children}
    </main>
    <Footer />
  </div>
  )
}

export default AppLayout