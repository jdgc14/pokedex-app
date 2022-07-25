import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';


const MainLayout = () => {

    const user = useSelector(state => state.user.name)

    const avatar = useSelector(state => state.user.avatar)
    //user && avatar
    if (user && avatar) {
        return (
            <>
                <NavBar />
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    } else {
        return (
            <Navigate to="/"/>
        )
    }    
};

export default MainLayout;