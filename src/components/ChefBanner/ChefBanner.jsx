import React from 'react';
import Recipes from '../Recipes/Recipes';
import { Link } from 'react-router-dom';

const ChefBanner = ({ chef }) => {
    const { name, img, experience, description, quantity, likes, id, recipes } = chef;
    return (
        <div>
            <div className='lg:grid grid-cols-2 justify-between gap-10'>
                <div>
                    <img className='rounded-xl' src={img} alt="" />
                </div>
                <div>
                    <h1 className='text-4xl text-yellow-400 hover:text-yellow-300 font-bold'>{name}</h1>
                    <p className='mt-3 text-xl'>{description}</p>
                    <p className='text-xl mt-2 mb-2'><span className='font-semibold'>Number of Recipes:</span> {quantity} Items</p>
                    <p className='text-xl mb-2'><span className='text-xl font-semibold'>Likes:</span> {likes}</p>
                    <p className='text-xl'><span className='font-semibold text-xl'>experience:</span> {experience}</p>
                </div>
            </div>
            <div className='lg:grid lg:mt-24 gap-5 grid-cols-3'>
                {
                    recipes.map((recipe,index)=><Recipes
                        key={index}
                        recipe={recipe}
                        chef={chef}
                    ></Recipes>)
                }
            </div>
            <Link to='/favorite'>
                <button className='bg-yellow-400 hover:bg-yellow-300 px-6 py-2 rounded-lg font-semibold text-white '>My Favorite</button>
            </Link>
        </div>
    );
};

export default ChefBanner;