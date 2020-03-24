import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Albums from '../albums/Albums';
import Singles from '../singles/Singles';
import Users from '../users/Users';

import '../../App.css';

const Browse = () => {
  return (
    <div className='tab-content'>
      <ul style={{ border: '3px solid white' }}>
        <li className='px-1' style={{ display: 'inline' }}>
          <a href='#artist'>Artists</a>
        </li>
        <li className='px-1' style={{ display: 'inline' }}>
          <a href='#albums'>Albums</a>
        </li>
        <li className='px-1' style={{ display: 'inline' }}>
          <a href='#singles'>Singles</a>
        </li>
      </ul>
      <h1>Browse</h1>
      <h3 id='artists'>Artists</h3>
      <Users />
      <h4 id='albums'>Albums</h4>
      <Fragment>
        <Albums />
        <h3 id='singles'>Singles</h3>
        <Singles />
      </Fragment>
    </div>
  );
};

export default Browse;
