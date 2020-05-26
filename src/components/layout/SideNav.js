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
                <Link to='/browse/genres/5ec42e7d83b76a1e5c07f3ab'>
                  Classic
                </Link>
              </li>
              <li>
                <Link to='/browse/genres/5ec0a03c99339f3ad85973cc'>Drill</Link>
              </li>
              <li>
                <Link to='/browse/genres/5ec4308583b76a1e5c07f3b1'>
                  Freestyles
                </Link>
              </li>
              <li>
                <Link to='/browse/genres/5ec42e9983b76a1e5c07f3ac'>
                  Instrumentals
                </Link>
              </li>
              <li>
                <Link to='/browse/genres/5ec42eb783b76a1e5c07f3ae'>Reggae</Link>
              </li>
              <li>
                <Link to='/browse/genres/5ec42eaa83b76a1e5c07f3ad'>R&B</Link>
              </li>
              <li>
                <Link to='/browse/genres/5ec42ec783b76a1e5c07f3af'>
                  Spanish
                </Link>
              </li>

              <li>
                <Link to='/browse/genres/5ec42ed183b76a1e5c07f3b0'>Trap</Link>
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
