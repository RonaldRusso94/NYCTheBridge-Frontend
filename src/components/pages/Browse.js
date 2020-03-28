import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Albums from '../albums/Albums';
import Singles from '../singles/Singles';
import Artists from '../artists/Artists';

import Subnav from '../layout/SubNav';

import '../../App.css';

const Browse = () => {
  return (
    <div className='tab-content'>
      <h1>Browse</h1>
      <Subnav />
    </div>
  );
};

export default Browse;
