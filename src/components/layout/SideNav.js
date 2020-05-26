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
                <a href='/browse/genres/5ec42e7d83b76a1e5c07f3ab'>Classic</a>
              </li>
              <li>
                <a href='/browse/genres/5ec0a03c99339f3ad85973cc'>Drill</a>
              </li>
              <li>
                <a href='/browse/genres/5ec4308583b76a1e5c07f3b1'>Freestyles</a>
              </li>
              <li>
                <a href='/browse/genres/5ec42e9983b76a1e5c07f3ac'>
                  Instrumentals
                </a>
              </li>
              <li>
                <a href='/browse/genres/5ec42eb783b76a1e5c07f3ae'>Reggae</a>
              </li>
              <li>
                <a href='/browse/genres/5ec42eaa83b76a1e5c07f3ad'>R&B</a>
              </li>
              <li>
                <a href='/browse/genres/5ec42ec783b76a1e5c07f3af'>Spanish</a>
              </li>

              <li>
                <a href='/browse/genres/5ec42ed183b76a1e5c07f3b0'>Trap</a>
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
