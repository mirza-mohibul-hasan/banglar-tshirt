import React from 'react';

const Tshirt = ({tshirt, handleAddTocart}) => {
    // console.log(tshirt)
    const {_id,price, name, gender, picture} = tshirt;
    return (
        <div className='border border-gray-300 rounded-xl p-3'>
            <img className='w-64 h-72 mx-auto p-2 rounded-md' src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddTocart(tshirt)} className='hover:bg-amber-500 border p-3 rounded-xl'>Buy Now</button>
        </div>
    );
};

export default Tshirt;