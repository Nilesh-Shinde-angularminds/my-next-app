import React, { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
interface PrivateRouteProps {
    children: ReactNode;
  }

const  AuthLaout:React.FC<PrivateRouteProps> =({children})=> {

  return (
    <>
      {children}
    </>
    
  )
}

export default AuthLaout