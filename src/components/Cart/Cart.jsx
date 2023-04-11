import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    // console.log(handleRemoveFromCart)
    let message;
    if(cart.length ===0){
        message = <p>Product kino agey</p>
    }
    else{
        message = <p className={cart.length ===1? 'bg-lime-600':'bg-red-700'}>Kenar jonno dhonnobad</p>
    }
    return (
        <div>
            <h1 className={`font-bold ${cart.length===1?'bg-yellow-600':'bg-green-600'}`} >Order Summary: {cart.length}</h1>
            {
                cart.length>2? <p>Thanks for duitar beshi</p>:<p>Tumi ki gorib?</p>
            }
            {message}

            {
                cart.map(tshirt => 
                <p key={tshirt._id}>{tshirt.name}
                 <button className='ml-5 border hover:bg-amber-400 p-2' onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button>
                 </p> )
            }
            {
                cart.length === 2 && <p>Double re nanir beta</p>
            }
            {
                cart.length === 3 || <p>Tin ta tw hoilo na mamur beta</p>
            }
        </div>
    );
};

export default Cart;