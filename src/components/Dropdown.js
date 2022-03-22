import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
            className={
                isOpen
                    ? 'fixed grid-rows-4 top-20  bg-black bg-opacity-50 w-full left-1/2 transform -translate-x-1/2  p-7 z-20 text-white'
                    : 'hidden'
            }
            onClick={toggle}
        >
            <div className='p-2'>
                <Link to='/' >
                    Home
                </Link>
            </div>
            <div className='p-2'>
                <Link to='/orchestra' >
                    Orchestra
                </Link>
            </div>
            <div className='p-2'>
                <Link to='/album' >
                    Album
                </Link>
            </div>
        </div>
    );
};

export default Dropdown;