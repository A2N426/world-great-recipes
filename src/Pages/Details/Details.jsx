import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const Details = () => {
    const chef = useLoaderData()
    console.log(chef)
    return (
        <div>
            <div className='lg:px-36 px-6 mt-10'>
                <img src={chef?.img} alt="" />
            </div>
        </div>
    );
};

export default Details;