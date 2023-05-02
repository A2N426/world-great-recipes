import React from 'react';
import Banner from '../../components/Banner/Banner';
import Chef from '../../components/Chef/Chef';
import Client from '../../components/Client/Client';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <Client></Client>
        </div>
    );
};

export default Home;