import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { name, img, experience, quantity, likes, id } = chef;
    return (
        <div className='border border-red-600 rounded-xl font-semibold p-4 mt-8'>
            <img className='mx-auto w-full  h-56 rounded-xl' src={img} alt="" />
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <p>{experience}</p>
            <p>Number Of Recipes: {quantity}</p>
            <p>Likes:{likes}</p>
            <Link to={`/view/${id}`}>
                <button className='bg-yellow-400 hover:bg-yellow-300 w-full py-3 rounded-lg font-semibold'>View Recipes</button>
            </Link>
        </div>
    );
};

export default ChefCard;