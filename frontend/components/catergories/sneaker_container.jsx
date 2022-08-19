import React from 'react';
import { Link } from 'react-router-dom';

const Sneaker = () => {
    return (
        <div className='header-background'>
            <ul className='other-links'>
            <li><Link to='/Sandals'>Sandals</Link></li>
            <li><Link to='/Accessories'>Accessories</Link></li>
            <li><Link to='/Pumps'>Pumps</Link></li>
           <li><Link to='/Flats'>Flats</Link></li>
            </ul>
            <h2 className="header-name">
                Sneakers
            </h2>
        </div>
    )
};

export default Sneaker;