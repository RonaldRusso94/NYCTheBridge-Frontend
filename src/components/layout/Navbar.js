import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../search/Search.js';

import './Navbar.css';

// function myFunction() {
//   var x = document.getElementById('myLinks');
//   if (x.style.display === 'block') {
//     x.style.display = 'none';
//   } else {
//     x.style.display = 'block';
//   }
// }
// const linkHandler = () => {
//   if (show) return <NavLinks />;
//   else return null;
// };

const Navbar = ({
  icon,
  title,
  setSearch,
  text,
  setText,
  setSearchResults,
  mobileNav,
  setMobileNav,
}) => {
  return (
    <header className='navbar'>
      <nav className='navbar-nav bg-dark'>
        <div className='hamburger'>
          {' '}
          {/* <a
        href='#'
        onClick={() => (mobileNav ? setMobileNav(false) : setMobileNav(true))}
      >
        <i class='fa fa-bars'></i>
      </a> */}
        </div>

        <div className='navbar-logo'>
          <Link to='/'>
            <i className={icon}></i> {title}
          </Link>
        </div>

        {/* <div>
        <Search
          text={text}
          setText={setText}
          setSearch={setSearch}
          setSearchResults={setSearchResults}
        />
      </div> */}

        <div className='navbar-items'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/browse'>Browse</Link>
            </li>
            <li>
              <Link to='/admin'>Admin</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Navbar.defaultProps = {
  title: 'NYCTheBridge',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
