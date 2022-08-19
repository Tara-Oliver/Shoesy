import React from 'react';


const NavBar = ({logout, currentUser, openModal}) => {

  const session_button = currentUser ? 
  (<button className="btn" onClick={() => logout()}>Sign out</button>) : 
  
  (<button className="btn" onClick={() => openModal('login')}>Sign in</button>)


  return(
    <div>
    <header className = "nav-bar">
      <h1 className = "logo">Shoesy</h1>
      {session_button}
    </header >
  </div >)

}
export default NavBar