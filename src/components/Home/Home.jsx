import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);
    const handleAddTocart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id)
        if (exist) {
            alert('Already Added')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(ct => ct._id !== id)
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt}
                        handleAddTocart={handleAddTocart}
                    ></Tshirt>)
                }
            </div>
            <div>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;