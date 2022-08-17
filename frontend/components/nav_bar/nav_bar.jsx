import React from 'react';

const NavBar = ({openModal}) => {

  return (
  <div>
    <header className="nav-bar">
      <h1 className="logo">Shoesy</h1>
      <button className="btn" onClick={() => openModal('login')}>Sign in</button>
    </header>
  </div>)

}
export default NavBar