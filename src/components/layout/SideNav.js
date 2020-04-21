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
            <Link to='/browse/genres'>Browse</Link>
          </li>
        </ul>
        <ul className='categories my-2'>
          <li>
            <Link to='/browse/genres'>Genres</Link>
          </li>
          <li>
            <ul className='subcategories my-1'>
              <li>
                <Link to='/browse/genres/5e98cd285d04334070b3c2df'>
                  Classic
                </Link>
              </li>
              <li>
                <Link to='/browse/genres/5e98cc99c898c315748d0d4d'>Drill</Link>
              </li>
              <li>
                <Link to='/browse/genres/freestyle'>Freestyles</Link>
              </li>
              <li>
                <Link to='/browse/genres/instrumental'>Instrumentals</Link>
              </li>
              <li>
                <Link to='/browse/genres/5e98cd395d04334070b3c2e0'>Reggae</Link>
              </li>
              <li>
                <Link to='/browse/genres/5e98cd205d04334070b3c2de'>R&B</Link>
              </li>
              <li>
                <Link to='/browse/genres/5e98cd455d04334070b3c2e2'>
                  Spanish
                </Link>
              </li>

              <li>
                <Link to='/browse/genres/5e98cca0c898c315748d0d4e'>Trap</Link>
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
