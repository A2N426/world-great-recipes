import React from 'react';

const Client = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-5xl font-semibold text-center'>Food <span className='text-yellow-500'>List</span>!!!</h2>
            <div className='lg:flex gap-5'>
                <div className='relative mt-10'>
                    <img className='w-96 rounded-full opacity-50' src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='absolute left-32 top-28 text-5xl'>Pasta</div>
                </div>
                <div className='relative mt-10'>
                    <img className='w-96 rounded-full opacity-50' src="https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='absolute left-24 top-24 lg:top-28 text-5xl'>Chicken</div>
                </div>
                <div className='relative mt-10'>
                    <img className='w-96 rounded-full opacity-50' src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className='absolute left-28 top-28 text-5xl'>Burger</div>
                </div>
            </div>
        </div>
    );
};

export default Client;