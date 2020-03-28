import React, { useState } from 'react';
import Artists from '../users/Artists';
import Albums from '../albums/Albums';
import Singles from '../singles/Singles';
import Genres from '../genres/Genres';
import Videos from '../videos/Videos';

const SubNav = () => {
  const [nav, setNav] = useState('genres');

  const onClick = e => {
    setNav(e.target.name);
  };

  const navitems = ['genres', 'artists', 'albums', 'singles', 'videos'];

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

  if (nav === 'genres') {
    return (
      <>
        {subnav}
        <h3>Genres</h3>
        <Genres />
      </>
    );
  } else if (nav === 'artists') {
    return (
      <>
        {subnav}
        <h3>Artists</h3>
        <Artists />
      </>
    );
  } else if (nav === 'albums') {
    return (
      <>
        {subnav}
        <h3>Albums</h3>
        <Albums />
      </>
    );
  } else if (nav === 'singles') {
    return (
      <>
        {subnav}
        <h3>Singles</h3>
        <Singles />
      </>
    );
  } else if (nav === 'videos') {
    return (
      <>
        {subnav}
        <h3>Videos</h3>
        <Videos />
      </>
    );
  }
};

export default SubNav;
