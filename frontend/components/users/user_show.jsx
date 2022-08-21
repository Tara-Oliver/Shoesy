import React from 'react';

const UserShow = ({ currentUser }) => {
   return (
      <div className='header-background'>
         <h2 className="header-name">
            Welcome Back, {currentUser.username}!
         </h2>
      </div>
    )
};

export default UserShow;
