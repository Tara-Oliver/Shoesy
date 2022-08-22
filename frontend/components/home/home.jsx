import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndex from '../products/product_index';


const Home = () => {
  return (
    <header>
      <div className='iconbar-wrapper'>
        <div className='iconbar-top'>
          <h2 className='header'>Shop shoes that are meant for you.</h2>
        </div>

        <div className='iconbar-bottom'>
          <div className='iconbar-bubbles'>
            
            <div className='bubble-item'>
              <Link to='/Sneakers'><img src={'/Sneaker.png'} alt="sneaker_bubble" />
                <p>Sneakers</p>
              </Link>
            </div>


            <div className='bubble-item'>
              <Link to='/Sandals'><img src={'/Sandals.png'} alt="sandal_bubble" />
                <p>Sandals</p>
              </Link>
            </div>


            <div className='bubble-item'>
              <Link to='/Accessories'><img src={'/Accessories.png'} alt="accessories_bubble" />
                <p>Accessories</p>
              </Link>
            </div>



            <div className='bubble-item'>
              <Link to='/Heels'><img src={'/Pumps.png'} alt="heels_bubble" />
                <p>Heels</p>
              </Link>
            </div>



            <div className='bubble-item'>
              <Link to='/Flats'><img src={'/Flats.png'} alt="flats_bubble" />
                <p>Flats</p>
              </Link>
            </div>
            {/* <ProductIndex/> */}

          </div>
        </div>
      </div>
    </header >
  )
    

}

export default Home;