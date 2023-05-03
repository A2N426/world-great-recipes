import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Providers/AuthProviders';
import { FaUser } from 'react-icons/fa';

const NavigationBar = () => {
    const { user, logOut } = useContext(UserContext)
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='lg:flex bg-gray-100 p-4 rounded-md lg:px-36 justify-between items-center'>
            <div>
                <h2 className='text-3xl font-semibold lg:text-start text-center'><span className='text-yellow-400 hover:text-yellow-300'>Fat</span> Chef</h2>
            </div>
            <div className='flex lg:mx-0 mx-7 gap-8 font-semibold items-center'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                {
                    user
                    &&
                    <div className='relative group flex'>
                        <img className='w-10 rounded-full' src={user ? user.photoURL : <FaUser />} alt="Not Found" />
                        <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                        -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{user?.displayName}</span>
                    </div>
                }
                {
                    user ?
                        <Link onClick={handleLogOut} className='bg-yellow-400 px-6 py-2 text-white rounded-md hover:bg-yellow-300'>Log out</Link>
                        :
                        <Link to='/login' className='bg-yellow-400 text-white px-6 py-2 rounded-md hover:bg-yellow-300'>login</Link>

                }
            </div>
        </div >
    );
};

export default NavigationBar;