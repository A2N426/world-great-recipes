import React from 'react';

const ChefCard = ({ chef }) => {
    const { name, img, experience, quantity, likes, id } = chef;
    return (
        <div className='border rounded-xl font-semibold p-3 mt-8'>
            <img className='mx-auto w-full  h-56 rounded-xl' src={img} alt="" />
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <p>{experience}</p>
            <p>Number Of Recipes: {quantity}</p>
            <p>Likes:{likes}</p>
            <button className='bg-yellow-500 w-full py-3 rounded-lg font-semibold mt-2'>View Recipes</button>
        </div>
    );
};

export default ChefCard;