import React,{Suspense,lazy} from 'react';
// import Main from '../Main/Main';
const Main = lazy(()=>import('../Main/Main'))

const LoginLayout = () => {
    return (
        <>
            <Suspense fallback={<div className='text-2xl mt-10 font-semibold'>Please Wait...</div>}>
                <Main></Main>
            </Suspense>
        </>
    );
};

export default LoginLayout;