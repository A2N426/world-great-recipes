import React, { Suspense, lazy } from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
const Home = lazy(() => import('../../Pages/Home/Home'))

const Main = () => {
    return (
        <div>
            <Suspense fallback={<div className='text-2xl mt-5 font-semibold'>Please Wait...</div>}>
                <NavigationBar></NavigationBar>
                <Home></Home>
            </Suspense>
        </div>
    );
};

export default Main;