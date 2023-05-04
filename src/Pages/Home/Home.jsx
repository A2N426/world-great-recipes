import React from 'react';
import Banner from '../../components/Banner/Banner';
import Chef from '../../components/Chef/Chef'
import Food from '../../components/Food/Food';
import Latest from '../../components/Latest/Latest';

const Home = () => {
    
    return (
        <>
            <Banner></Banner>
            <Chef></Chef>
            <Food></Food>
            <Latest></Latest>
        </>
    );
};

export default Home;