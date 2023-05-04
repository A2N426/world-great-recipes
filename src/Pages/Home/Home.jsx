import React, { Suspense, lazy } from 'react';
import Banner from '../../components/Banner/Banner';
// import Chef from '../../components/Chef/Chef'
import Food from '../../components/Food/Food';
import Latest from '../../components/Latest/Latest';
const Chef = lazy(() => import('../../components/Chef/Chef'))

const Home = () => {

    return (
        <>
            <Banner></Banner>
            <Suspense fallback={<div className='text-2xl mt-10 font-semibold'>Please Wait...</div>}>
                <Chef></Chef>
            </Suspense>
            <Food></Food>
            <Latest></Latest>
        </>
    );
};

export default Home;