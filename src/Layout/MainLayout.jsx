import React from 'react';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='bg-[#F5F5F5]'>
           <Navbar></Navbar>
           <div>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;