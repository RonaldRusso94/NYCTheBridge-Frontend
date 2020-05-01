import React, { useState, useContext, useEffect } from 'react';
import ArtistOverview from './profile/ArtistOverview.js';
import ArtistAbout from './ArtistAbout';

import ArtistsContext from '../../context/artists/artistsContext';

import ArtistHeader from './profile/ArtistHeader.js';

const User = ({ match }) => {
  const artistsContext = useContext(ArtistsContext);
  const { getArtist, artist } = artistsContext;

  useEffect(() => {
    getArtist(match.params.id);
    // eslint-disable-next-line
  }, []);

  const [nav, setNav] = useState('overview');

  if (nav === 'overview') {
    return (
      <>
        <ArtistHeader setNav={setNav} artist={artist} />

        {/* {subnav}
        <h1>Overview</h1> */}
        <ArtistOverview paramsId={match.params.id} />
      </>
    );
  } else if (nav === 'about') {
    return (
      <>
        {/* {subnav} */}
        {console.log(nav)}
        <h1>About</h1>
        {/* <ArtistAbout params={match.params.id} /> */}
      </>
    );
  }
};

export default User;
