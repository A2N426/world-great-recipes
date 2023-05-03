import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='lg:flex bg-gray-100 p-4 rounded-md lg:px-36 justify-between items-center'>
            <div>
                <h2 className='text-3xl font-semibold lg:text-start text-center'><span className='text-yellow-500'>Fat</span> Chef</h2>
            </div>
            <div className='flex lg:mx-0 mx-7 gap-8 font-semibold items-center'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link>User</Link>
                <Link to='/login' className='bg-yellow-400 px-6 py-2 rounded-md'>login</Link>
                <Link to='/sign-up' className='bg-yellow-400 px-6 py-2 rounded-md'>sign up</Link>
            </div>
        </div>
    );
};

export default NavigationBar;