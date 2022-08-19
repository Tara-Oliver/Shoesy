import React from 'react';
import { Link } from 'react-router-dom';


const IconBar = () => {
    return (
        <div className='iconbar'>
            <h2 className='header'>Shop shoes that are meant for you.</h2>
            <div className='bubbles'>
                <ul className='bubble-container'>
                    <li className='bubble-item'>
                        <Link to='/Sneakers'>
                            <div className='imgContainer'>
                                <img src={'/Sneaker.png'}
                                     alt="sneaker_bubble"
                                     className='bubble-img'
                                />
                            </div>
                            <div>
                                <p>Sneakers</p>
                            </div>
                        </Link>
                    </li>

                    <li className='bubble-item'>
                        <Link to='/Sandals'>
                            <div className='imgContainer'>
                                <img src={'/Sandals.png'}
                                    alt="sandal_bubble"
                                    className='bubble-img'
                                />
                            </div>
                            <div>
                                <p>Sandals</p>
                            </div>
                        </Link>
                    </li>

                    <li className='bubble-item'>
                        <Link to='/Accessories'>
                            <div className='imgContainer'>
                                <img src={'/Accessories.png'}
                                    alt="accessories_bubble"
                                    className='bubble-img'
                                />
                            </div>
                            <div>
                                <p>Accessories</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            
            
            
            {/* 
            <Link to='/Sandals'>Sandals
            
            </Link>
            <Link to='/Accessories'>Accessories
            </Link>
            <Link to='/Pumps'>Pumps
            </Link>
            <Link to='/Flats'>Flats
            </Link> */}
        </div>
    )
}

export default IconBar;