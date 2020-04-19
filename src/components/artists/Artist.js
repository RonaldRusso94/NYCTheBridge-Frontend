import React, { useState } from 'react';
import ArtistOverview from './ArtistOverview';
import ArtistAbout from './ArtistAbout';

const User = ({ match }) => {
  const [nav, setNav] = useState('overview');

  const onClick = (e) => {
    setNav(e.target.name);
  };

  const navitems = ['overview', 'about'];

  const subnav = (
    <ul>
      {navitems.map((item) => {
        return (
          <li className='px-1' style={{ display: 'inline' }} key={item}>
            <a name={item} onClick={onClick}>
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );

  // <ul>
  //   <a href='#' onClick={setNav('overview')}>
  //     <li>Overview</li>
  //   </a>
  //   <a href='#' onClick={setNav('about')}>
  //     <li>About</li>
  //   </a>
  // </ul>;

  if (nav === 'overview') {
    return (
      <>
        {subnav}
        <h1>Overview</h1>
        <ArtistOverview params={match.params.id} />
      </>
    );
  } else if (nav === 'about') {
    return (
      <>
        {subnav}
        <h1>About</h1>
        <ArtistAbout params={match.params.id} />
      </>
    );
  }
};

export default User;
