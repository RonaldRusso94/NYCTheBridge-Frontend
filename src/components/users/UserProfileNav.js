import React, { useState } from 'react';

export const UserProfileNav = () => {
  // Subnav Overview/About
  const [nav, setNav] = useState('overview');

  const onClick = e => {
    setNav(e.target.name);
  };

  const navitems = ['overview', 'about'];

  const subnav = (
    <ul>
      {navitems.map(item => {
        return (
          <li className='px-1' style={{ display: 'inline' }}>
            <a name={item} onClick={onClick}>
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );

  if (nav === 'overview') {
    return (
      <>
        {subnav}
        <h1>Overview</h1>
      </>
    );
  } else if (nav === 'about') {
    return (
      <>
        {subnav}
        <h1>About</h1>
      </>
    );
  }
};

export default UserProfileNav;
