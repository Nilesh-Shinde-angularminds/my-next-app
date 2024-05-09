// components/PrivateRoute.tsx
"use client"
// components/PrivateRoute.tsx

import { useRouter, usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import AppLayout from './AppLayout';
import AuthLaout from './AuthLayout';

interface PrivateRouteProps {
  children: ReactNode;
}

const Layout: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname()

  const token = localStorage.getItem('authToken');
  useEffect(() => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('authToken');
      if (pathName === '/login' && token) {
        // If user is already authenticated and tries to access login page, redirect to dashboard
        router.push('/dashboard');
      } else if (pathName !== '/login' && !token) {
        // If user is not authenticated and tries to access any other page except login, redirect to login
        router.push('/login');
      }
    }
  }, [pathName]);

  return <>{
    token ? <AppLayout>{children}</AppLayout>: <AuthLaout>{children}</AuthLaout>
  }</>;
};

export default Layout;
