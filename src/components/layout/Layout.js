import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchState from '../search/SearchState';
const Layout = ({ children }) => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState(false);

  if (search === false) {
    return (
      <div>
        <Navbar text={text} setText={setText} setSearch={setSearch} />
        {children}
      </div>
    );
  } else {
    return (
      <div>
        <Navbar text={text} setText={setText} setSearch={setSearch} />
        <h1 className='all-center py-3 my-3'>
          Search for an Artist/Song/Album
        </h1>
        <div className='all-center' style={{ width: '40%' }}>
          <a className='btn btn-dark all-center' href='/'>
            Back To Home
          </a>
        </div>
      </div>
    );
  }
};
export default Layout;
