import React, { useEffect, Redirect, useState } from 'react'
import {

    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
    useNavigate
} from "react-router-dom";
import AdminRoute from './AdminRoute';
import AdminLayout from './AdminLayout';

const AdminApp = () => {
    console.log('admin app');
    return (
        <div>
            <AdminLayout />
            <AdminRoute />

        </div>
    )
}

export default AdminApp;