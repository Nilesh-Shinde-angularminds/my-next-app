import React from 'react'
import Profile from "../../components/Profile"
import PrivateRoute from '@/app/authGuard/PrivateRoute'

function page() {
    return (
        <PrivateRoute>
            <Profile/>
        </PrivateRoute>
    )
}

export default page