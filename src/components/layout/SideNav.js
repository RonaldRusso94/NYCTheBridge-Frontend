import React, { useEffect, useState } from 'react';

const SideNav = () => {
  return (
    <section className='wrapper'>
      <div className='sidebar'>
        <ul className='pages my-3'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Browse</a>
          </li>
        </ul>
        <ul className='categories my-2'>
          <li>
            <a href='#'>Genres</a>
          </li>
          <li>
            <ul className='subcategories my-1'>
              <li>
                <a href='#'>Classic</a>
              </li>
              <li>
                <a href='#'>Trap</a>
              </li>
              <li>
                <a href='#'>Drill</a>
              </li>
              <li>
                <a href='#'>R&B</a>
              </li>
              <li>
                <a href='#'>Spanish</a>
              </li>
              <li>
                <a href='#'>Reggae</a>
              </li>
              <li>
                <a href='#'>Pop</a>
              </li>
              <li>
                <a href='#'>Freestyles</a>
              </li>
              <li>
                <a href='#'>Instrumentals</a>
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
