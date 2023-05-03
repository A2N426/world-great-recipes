import React from 'react';

const ChefBanner = ({find}) => {
    const { name, img, experience,description, quantity, likes, id } = find;
    return (
        <div className='lg:flex justify-between'>
            <div>
                <img  src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{quantity}</p>
                <p>{experience}</p>
            </div>
        </div>
    );
};

export default ChefBanner;