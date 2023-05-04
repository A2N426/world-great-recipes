import React, { useEffect, useState } from 'react';
import Favorite from '../../components/Favorite/Favorite';

const FavoriteRecipes = () => {
    const [recipes,setRecipes]=useState([])
    useEffect( ()=>{
        const get = JSON.parse(localStorage.getItem('chefs') || '[]')
        setRecipes(get)
    },[])
    return (
        <div>
            {
                recipes.map((favorite,index)=><Favorite
                    key={index}
                    favorite={favorite}
                ></Favorite>)
            }
        </div>
    );
};

export default FavoriteRecipes;