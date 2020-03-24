import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Albums from '../albums/Albums';
import Singles from '../singles/Singles';
import Users from '../users/Users';

import '../../App.css';

const Browse = () => {
  return (
    <div>
      <h1>Admin</h1>
      <form action=''>
        <input type='text' name='username' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button className='btn-block btn-dark'>Submit</button>
      </form>
    </div>
  );
};

export default Browse;
