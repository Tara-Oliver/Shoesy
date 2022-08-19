import React from 'react';
import { Link } from 'react-router-dom';


const IconBar = () => {
    return (
        <div className='iconbar'>
            <h2 className='header'>Shop shoes that are meant for you.</h2>
            <div>
                <ul>
                    <li>
                        <Link to='/Sneakers'>
                            <div className='imgContainer'>
                                {/* <img src={require('./images/Sneaker.png').default}/> */}
                                {/* <img src={require('./logo.jpeg')} /> */}
                            </div>
                            <div>
                                <p>Sneakers</p>
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