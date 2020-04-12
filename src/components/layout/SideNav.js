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
            <Link to='/browse/genres'>Genres</Link>
          </li>
          <li>
            <ul className='subcategories my-1'>
              <li>
                <Link to='/browse/genres/classic'>Classic</Link>
              </li>
              <li>
                <Link to='/browse/genres/trap'>Trap</Link>
              </li>
              <li>
                <Link to='/browse/genres/drill'>Drill</Link>
              </li>
              <li>
                <Link to='/browse/genres/r&b'>R&B</Link>
              </li>
              <li>
                <Link to='/browse/genres/spanish'>Spanish</Link>
              </li>
              <li>
                <Link to='/browse/genres/reggae'>Reggae</Link>
              </li>
              <li>
                <Link to='/browse/genres/freestyle'>Freestyles</Link>
              </li>
              <li>
                <Link to='/browse/genres/instrumental'>Instrumentals</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/browse/artists'>Artists</Link>
          </li>
          <li>
            <Link to='/browse/albums'>Albums</Link>
          </li>
          <li>
            <Link to='/browse/singles'>Singles</Link>
          </li>
          <li>
            <Link to='/browse/videos'>Videos</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideNav;
