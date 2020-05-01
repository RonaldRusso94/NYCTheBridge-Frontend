import React, { useState, useContext, useEffect } from 'react';
import ArtistOverview from './ArtistOverview';
import ArtistAbout from './ArtistAbout';

import ArtistsContext from '../../context/artists/artistsContext';

const User = ({ match }) => {
  const artistsContext = useContext(ArtistsContext);
  const { getArtist, artist } = artistsContext;

  useEffect(() => {
    getArtist(match.params.id);
    // eslint-disable-next-line
  }, []);

  console.log(artist);
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

  if (nav === 'overview') {
    return (
      <>
        <div className=''>
          {/* artist detail */}
          <div className='artist-img'>
            <img className='' src={artist.img} alt='' />
            <h1 className='name'>{artist.name}</h1>
          </div>
        </div>
        {/* {subnav}
        <h1>Overview</h1> */}
        <ArtistOverview subnav={subnav} params={match.params.id} />
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
