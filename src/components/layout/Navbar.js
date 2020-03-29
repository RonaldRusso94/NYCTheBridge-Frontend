import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchState from '../search/SearchState.js';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon}></i> {title}
        </Link>
      </h1>
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
      <SearchState />
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'NYCTheBridge',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
