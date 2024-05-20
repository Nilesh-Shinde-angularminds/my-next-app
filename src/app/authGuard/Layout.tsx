"use client"

import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useContext, useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import AuthLaout from './AuthLayout';
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { AuthContext } from '../layout';

interface PrivateRouteProps {
  children: ReactNode;
}

const Layout: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname()

  const { authenticated } = useContext(AuthContext) as any



  useEffect(() => {
    if (typeof window !== 'undefined') {

      if (pathName.includes("/auth") && authenticated) {
        router.push('/dashboard');
      }
      else if (pathName.includes("/auth") == !authenticated) {
        router.push(pathName);
      }
      else if (!pathName.includes("/auth") == !authenticated) {
        router.push("/auth/login");
      }

    }
  }, [pathName])


  return <>{
    authenticated ? <AppLayout>{children}</AppLayout> : <AuthLaout>{children}</AuthLaout>
  }</>;
};

export default Layout;
