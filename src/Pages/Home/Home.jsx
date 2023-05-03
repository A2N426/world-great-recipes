import React, { Suspense, lazy } from 'react';
const App = lazy(() => import('../../App'))


const Home = () => {
    <div className='text-2xl mt-5 font-semibold'>Please Wait...</div>
    return (
        <>
            <Suspense fallback={<div className='text-3xl mt-10'>Please Wait...</div>}>
                <App></App>
            </Suspense>
        </>
    );
};

export default Home;