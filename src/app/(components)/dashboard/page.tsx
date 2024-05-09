import PrivateRoute from '@/app/authGuard/PrivateRoute'
import Dashboard from '../../components/dashboard'
import React from 'react'

function page() {
    return (
       <PrivateRoute>
         <Dashboard />
       </PrivateRoute>
    )
}

export default page