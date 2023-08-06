import {

    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
    useNavigate
} from "react-router-dom";
import React, { useState } from 'react';

const LoginPage = React.lazy(() => import('../../pages/Login'));
const HomePage = React.lazy(() => import('../../pages/Home'))

const AdminRoute = () => {
    console.log('AdminRoute');


    return (
        <div>
            <Routes>
                <Route path="/" Component={LoginPage} />
                <Route path="/login" Component={LoginPage} />
                <Route path="/home" Component={HomePage} />
            </Routes>
        </div>
    )
        ;
}

export default AdminRoute;