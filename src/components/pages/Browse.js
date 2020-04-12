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
      <h1>Browse</h1>
      <ul className='d-flex' style={{ justifyContent: 'space-around' }}>
        {navitems.map((item) => {
          return (
            <li>
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
        <h3>Genres</h3>
        <Genres />
      </>
    );
  } else if (match.params.category === 'artists') {
    return (
      <>
        {subnav}
        <h3>Artists</h3>
        <Artists />
      </>
    );
  } else if (match.params.category === 'albums') {
    return (
      <>
        {subnav}
        <h3>Albums</h3>
        <Albums />
      </>
    );
  } else if (match.params.category === 'singles') {
    return (
      <>
        {subnav}
        <h3>Singles</h3>
        <Singles />
      </>
    );
  } else if (match.params.category === 'videos') {
    return (
      <>
        {subnav}
        <h3>Videos</h3>
        <Videos />
      </>
    );
  } else {
    return (
      <>
        {subnav}
        <h3>Genres</h3>
        <Genres />
      </>
    );
  }
};

export default Browse;
