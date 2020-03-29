import React from 'react';
import Navbar from './Navbar';
import SearchState from '../search/SearchState';
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>footer</footer>
    </div>
  );
};
export default Layout;
