import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <section className='wrapper'>
      <div className='sidebar'>
        <ul className='pages my-3'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/browse'>Browse</Link>
          </li>
        </ul>
        <ul className='categories my-2'>
          <li>
            <a href='/browse'>Genres</a>
          </li>
          <li>
            <ul className='subcategories my-1'>
              <li>
                <Link to='/genre/classic'>Classic</Link>
              </li>
              <li>
                <Link to='/genre/trap'>Trap</Link>
              </li>
              <li>
                <Link to='/genre/drill'>Drill</Link>
              </li>
              <li>
                <Link to='/genre/r&b'>R&B</Link>
              </li>
              <li>
                <Link to='/genre/spanish'>Spanish</Link>
              </li>
              <li>
                <Link to='/genre/reggae'>Reggae</Link>
              </li>
              <li>
                <Link to='/genre/freestyle'>Freestyles</Link>
              </li>
              <li>
                <Link to='/genre/instrumental'>Instrumentals</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>Artists</a>
          </li>
          <li>
            <a href='#'>Albums</a>
          </li>
          <li>
            <a href='#'>Singles</a>
          </li>
          <li>
            <a href='#'>Sigles</a>
          </li>
          <li>
            <a href='#'>Videos</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideNav;
