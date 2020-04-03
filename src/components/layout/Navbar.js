import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../search/Search.js';

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
  setSearchResults
}) => {
  const [show, setShow] = useState(false);

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon}></i> {title}
        </Link>
      </h1>
      <Search
        text={text}
        setText={setText}
        setSearch={setSearch}
        setSearchResults={setSearchResults}
      />
      {show && (
        <ul className='navbar-desktop-links'>
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
      )}
      <a href='#' onClick={() => (show ? setShow(false) : setShow(true))}>
        <i class='fa fa-bars'></i>
      </a>

      {console.log(document.getElementById('myLinks'))}
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
