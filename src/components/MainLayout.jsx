import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";
import Footer from './Footer';
import NavBar from './NavBar';


const MainLayout = () => {

    const user = useSelector(state => state.user).name

    if (user) {
        return (
            <div>
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        )
    } else {
        return (
            <Navigate to="/"/>
        )
    }    
};

export default MainLayout;