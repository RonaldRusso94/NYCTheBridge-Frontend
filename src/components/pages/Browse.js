import React from 'react';
import { NavLink } from 'react-router-dom';

import Artists from '../artists/Artists';
import Albums from '../albums/Albums';
import Singles from '../singles/Singles';
import Genres from '../genres/Genres';
import Videos from '../videos/Videos';

import '../../App.css';

const Browse = ({ match }) => {
  const navitems = ['genres', 'artists', 'albums', 'singles', 'videos'];

  const subnav = (
    <>
      <h1 className='py'>Browse</h1>
      <ul className='browse-subnav'>
        {navitems.map((item) => {
          return (
            <li key={item}>
              <NavLink
                className='capitalize'
                to={`/browse/${item}`}
                name={item}
              >
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );

  if (match.params.category === 'genres') {
    return (
      <>
        {subnav}
        <Genres />
      </>
    );
  } else if (match.params.category === 'artists') {
    return (
      <>
        {subnav}
        <Artists />
      </>
    );
  } else if (match.params.category === 'albums') {
    return (
      <>
        {subnav}
        <Albums />
      </>
    );
  } else if (match.params.category === 'singles') {
    return (
      <>
        {subnav}
        <Singles />
      </>
    );
  } else if (match.params.category === 'videos') {
    return (
      <>
        {subnav}
        <Videos />
      </>
    );
  } else {
    return (
      <>
        {subnav}
        <Genres />
      </>
    );
  }
};

export default Browse;
