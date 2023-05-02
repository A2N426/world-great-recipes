import React from 'react';
import Banner from '../../components/Banner/Banner';
import Chef from '../../components/Chef/Chef';
import Food from '../../components/Food/Food';
import Latest from '../../components/Latest/Latest';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <Food></Food>
            <Latest></Latest>
            <Footer></Footer>
        </div>
    );
};

export default Home;