import React from 'react';
import Details from '../../Pages/Details/Details';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';

const DetailsLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DetailsLayout;