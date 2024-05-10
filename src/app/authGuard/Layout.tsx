// components/PrivateRoute.tsx
"use client"
// components/PrivateRoute.tsx

import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useContext, useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import AuthLaout from './AuthLayout';
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { AuthContext } from '../layout';

interface PrivateRouteProps {
  children: ReactNode;
  // authenticated: any
}

const Layout: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname()
  // const [authenticated, setAuthenticated] = useState(false)

  const { authenticated } = useContext(AuthContext) as any


  // useEffect(() => {
  //   let cookiess = hasCookie("authToken")
  //   setAuthenticated(Boolean(cookiess))
  // }, [])

  // const token = localStorage.getItem('authToken');
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     // const token = localStorage.getItem('authToken');
  //     if (pathName === '/login' && token) {
  //       // If user is already authenticated and tries to access login page, redirect to dashboard
  //       router.push('/dashboard');
  //     } else if (pathName !== '/login' && !token) {
  //       // If user is not authenticated and tries to access any other page except login, redirect to login
  //       router.push('/login');
  //     }
  //   }
  // }, [pathName]);




  return <>{
    authenticated ? <AppLayout>{children}</AppLayout> : <AuthLaout>{children}</AuthLaout>
  }</>;
};

export default Layout;
