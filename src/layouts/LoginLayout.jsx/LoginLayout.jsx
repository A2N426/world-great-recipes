import React, { Suspense, lazy } from 'react';
import Main from '../Main/Main';
// const Main = lazy(()=>import('../Main/Main'))

const LoginLayout = () => {
    return (
        <>
            <Main></Main>
        </>
    );
};

export default LoginLayout;