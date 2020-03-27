import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Albums from '../albums/Albums';
import Singles from '../singles/Singles';
import Users from '../users/Users';

import Subnav from '../layout/SubNav';

import '../../App.css';

const Browse = () => {
  // const onClick = e => {
  //   setNav(e.target.name);
  // };

  return (
    <div className='tab-content'>
      <h1>Browse</h1>
      <Subnav />

      {/* <h3 id='artists'>Artists</h3>
      <Users />

      <h4 id='albums'>Albums</h4>
      <Fragment>
        <Albums />
        <h3 id='singles'>Singles</h3>
        <Singles />
      </Fragment> */}
    </div>
  );
};

export default Browse;
