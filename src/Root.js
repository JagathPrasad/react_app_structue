import {

    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
    useNavigate
} from "react-router-dom";
import React, { useState } from 'react';

const AdminPage = React.lazy(() => import('./app/admin/Admin'))
const Root = () => {

    console.log('Admin Route');
    return (
        <Router>
            <AdminPage />
        </Router>
    )
}

export default Root;