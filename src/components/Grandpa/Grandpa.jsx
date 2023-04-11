import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    return (
        <div>
            <h2>Grandpa</h2>
            <section className='flex justify-between gap-8 w-[30%] mx-auto mt-5'>
                <Father></Father>
                <Uncle ></Uncle>
                <Aunty ></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;