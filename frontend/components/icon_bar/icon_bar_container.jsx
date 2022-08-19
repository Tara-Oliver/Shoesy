import React from 'react';
import { Link } from 'react-router-dom';


const IconBar = () => {
    return (
        <main>
            <div className='home'>
                <div className='big'>
                    <div className='bubble-bar'>
                        <h2 className='title'>Shop shoes that are meant for you.</h2>
                        <div className='data'>
                            <div className='bubbles-div'>
                                <div className='background-block'>
                                    <ul className='bubble-box'>


                                        <li className='bubble-index-item'>
                                            <Link to='/Sneakers'>
                                                <div>
                                                    <div className='bubble-box'>
                                                        <img src={'/Sneaker.png'}
                                                            alt="sneaker_bubble"
                                                            className='bubble-pic'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='p-div'>
                                                    <p>Sneakers</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className='bubble-index-item'>
                                            <Link to='/Sandals'>
                                                <div>
                                                    <div className='bubble-box'>
                                                        <img src={'/Sandals.png'}
                                                            alt="sandal_bubble"
                                                            className='bubble-pic'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='p-div'>
                                                    <p>Sandals</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className='bubble-index-item'>
                                            <Link to='/Accessories'>
                                                <div>
                                                    <div className='bubble-box'>
                                                        <img src={'/Accessories.png'}
                                                            alt="accessories_bubble"
                                                            className='bubble-pic'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='p-div'>
                                                    <p>Accessories</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className='bubble-index-item'>
                                            <Link to='/Pumps'>
                                                <div>
                                                    <div className='bubble-box'>
                                                        <img src={'/Pumps.png'}
                                                            alt="pumps_bubble"
                                                            className='bubble-pic'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='p-div'>
                                                    <p>Pumps</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className='bubble-index-item'>
                                            <Link to='/Flats'>
                                                <div>
                                                    <div className='bubble-box'>
                                                        <img src={'/Flats.png'}
                                                            alt="flats_bubble"
                                                            className='bubble-pic'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='p-div'>
                                                    <p>Flats</p>
                                                </div>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default IconBar;