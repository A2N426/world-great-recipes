import React from 'react';

const Recipes = ({ recipe }) => {
    const { img, method, name, rating, spices } = recipe
    console.log(recipe)
    return (
        <div className='border border-red-600 p-5 rounded-md'>
                <img className='rounded-lg' src={img} alt="" />
                <h1 className='text-2xl text-yellow-400 mt-2 font-semibold mb-3'>{name}</h1>
                <p className='font-semibold'>{method}</p>
                <div>
                    <p className='text-xl font-bold text-yellow-400'>Cooking Method</p>
                    {spices?.map((spice, index) => <li key={index} className='font-semibold'>{spice}</li>)}
                </div>
                <button className='bg-yellow-400 hover:bg-yellow-300 w-full p-2 font-semibold text-white rounded-lg mt-3'>Favorite</button>
        </div>
    );
};

export default Recipes;