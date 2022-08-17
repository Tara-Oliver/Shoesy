import React from 'react';
import { Link } from 'react-router-dom';

const IconBar = () => {
    return (
        <div className='Iconbar'>
            <h2>Shop shoes that are meant for you.</h2>
            <Link to='/Sneakers'>Sneakers
                
            </Link>
            <Link to='/Sandals'>Sandals
            
            </Link>
            <Link to='/Accessories'>Accessories
            </Link>
            <Link to='/Pumps'>Pumps
            </Link>
            <Link to='/Flats'>Flats
            </Link>
        </div>
    )
}

export default IconBar;