// components/PrivateRoute.tsx
"use client"
// components/PrivateRoute.tsx

import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useEffect, useContext, useState } from 'react';
import { AuthContext } from '../layout';
import { getCookie, hasCookie, setCookie } from "cookies-next";


interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { authenticated } = useContext(AuthContext) as any
  console.log("fsdfssd", authenticated);
  const router = useRouter();
  const pathName = usePathname()

  console.log("pathName", pathName);


  useEffect(() => {
    if (typeof window !== 'undefined') {

      if (pathName.includes("/auth") && authenticated) {

        router.push('/dashboard');
      } else if (pathName !== '/auth/login' && !authenticated) {
        console.log("pused2");
        router.push('auth/login');
      }
    }
  }, [pathName]);

  return <>{children}</>;
};

export default PrivateRoute;
