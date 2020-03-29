import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../search/Search.js';

const Navbar = ({ icon, title, setSearch, text, setText }) => {
  return (
    <nav className='navbar bg-primary'>
      {/* {console.log('FROM NAVBAR CHANGE ', change)} */}
      <h1>
        <Link to='/'>
          <i className={icon}></i> {title}
        </Link>
      </h1>
      <Search text={text} setText={setText} setSearch={setSearch} />
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
