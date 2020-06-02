import React from 'react';
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
