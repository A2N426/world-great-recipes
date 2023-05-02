import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='lg:px-28 mt-6'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;