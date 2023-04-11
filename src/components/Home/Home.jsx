import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h1 className='mt-5'>This is home: {tshirts.length}</h1>
        </div>
    );
};

export default Home;