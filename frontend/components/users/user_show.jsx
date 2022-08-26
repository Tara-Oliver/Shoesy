import React from 'react';
import HomeContainer from '../home/home_container';

const UserShow = ({ currentUser }) => {
   return (
     <>
      <div className='header-background'>
         <h2 className="header-name">
            Welcome Back, {currentUser.username}!
         </h2>
      </div>
      <div>
         <HomeContainer />
      </div>
      </>
    )
};

export default UserShow;
