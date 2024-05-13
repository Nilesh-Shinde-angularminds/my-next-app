"use client"

import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useEffect, useContext, useState } from 'react';
import { AuthContext } from '../layout';
import { getCookie, hasCookie, setCookie } from "cookies-next";


interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { authenticated } = useContext(AuthContext) as any
  const router = useRouter();
  const pathName = usePathname()



  useEffect(() => {
    if (typeof window !== 'undefined') {

      if (pathName.includes("/auth") && authenticated) {
        router.push('/dashboard');
      }
       else if (pathName.includes("/auth") == !authenticated) {
        router.push(pathName);
      }
    }
  }, [pathName]);

  return <>{children}</>;
};

export default PrivateRoute;
