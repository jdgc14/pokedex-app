import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';
import Configs from './Configs';


const MainLayout = () => {

    const user = useSelector(state => state.user.name)

    const avatar = useSelector(state => state.user.avatar)
    //user && avatar
    if (true) {
        return (
            <>
                <NavBar />
                <Header />
                <Configs />
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