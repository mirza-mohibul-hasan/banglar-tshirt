import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link className='mx-2 hover:bg-amber-600 font-bold p-2' to='/'>Home</Link>
            <Link className='mx-2 hover:bg-amber-600 font-bold p-2' to='/'>Order Review</Link>
            <Link className='mx-2 hover:bg-amber-600 font-bold p-2' to='/'>About</Link>
            <Link className='mx-2 hover:bg-amber-600 font-bold p-2' to='/'>Contact</Link>
        </nav>
    );
};

export default Header;