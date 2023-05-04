import React from 'react';

const Favorite = ({favorite}) => {
    const {name,recipes}=favorite
    return (
        <div>
            <h2>{name}</h2>
            {
            recipes.map(recipe=><img src={recipe.img} alt="" />)
            }
        </div>
    );
};

export default Favorite;