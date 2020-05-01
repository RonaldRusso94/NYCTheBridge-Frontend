import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../search/Search.js';

import './Navbar.css';

const Navbar = ({
  icon,
  title,
  setSearch,
  text,
  setText,
  setSearchResults,
}) => {
  const onClick = (e) => {
    setSearch(true);
  };

  return (
    <header className='navbar'>
      <nav className='navbar-nav bg-dark'>
        <div className='navbar-logo'>
          <Link to='/'>
            <i className={icon}></i> {title}
          </Link>
        </div>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon'></span>
        </label>

        <div className='desktop-searchbar'>
          <Search
            text={text}
            setText={setText}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
          />
        </div>

        <div className='navbar-items'>
          <ul onClick={() => document.getElementById('menu-btn').click()}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/browse/genres'>Browse</Link>
            </li>
            <li>
              <a onClick={onClick}>Search</a>
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
