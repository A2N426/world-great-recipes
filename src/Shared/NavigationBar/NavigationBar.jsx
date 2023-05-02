import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='text-3xl font-semibold'>Prawn Hub!</h2>
            </div>
            <div className='flex gap-8 font-semibold items-center'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link>User</Link>
                <button className='bg-yellow-400 px-6 py-2 rounded-md'>login</button>
            </div>
        </div>
    );
};

export default NavigationBar;