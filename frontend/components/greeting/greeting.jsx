import React from 'react';

const Greeting = ({ currentUser }) => {
   return (
      <h2 className="header-name">
         Welcome Back, {currentUser.username}!
         </h2>
    )
};

export default Greeting;
