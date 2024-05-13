// components/PrivateRoute.tsx
"use client"
// components/PrivateRoute.tsx

import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useContext, useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import AuthLaout from './AuthLayout';
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { AuthContext } from '../layout';
import { updateCSSVariables } from '../HandleTheme';

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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let theme = getCookie('theme')
      updateCSSVariables(theme)

      if (pathName.includes("/auth") && authenticated) {
        router.push('/dashboard');
      }
       else if (pathName.includes("/auth") == !authenticated) {
        router.push(pathName);
      }
      else if (!pathName.includes("/auth") == !authenticated){
        router.push("/auth/login");
      }
      
    }
  }, [pathName])




  return <>{
    authenticated ? <AppLayout>{children}</AppLayout> : <AuthLaout>{children}</AuthLaout>
  }</>;
};

export default Layout;
