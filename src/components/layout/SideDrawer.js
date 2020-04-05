import React from 'react';
import './Navbar.css';

const SideDrawer = (props) => {
  return (
    <nav className='side-drawer'>
      <ul>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>Browse</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
