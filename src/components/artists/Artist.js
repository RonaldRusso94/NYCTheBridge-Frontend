import React, { useState, useContext, useEffect } from 'react';
import ArtistOverview from './profile/ArtistOverview.js';
import ArtistAbout from './ArtistAbout';

import ArtistsContext from '../../context/artists/artistsContext';

import ArtistHeader from './profile/ArtistHeader.js';

import './Artist.css';

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
        <ArtistHeader nav={nav} setNav={setNav} artist={artist} />
        <ArtistOverview paramsId={match.params.id} />
      </>
    );
  } else if (nav === 'about') {
    return (
      <>
        <ArtistHeader nav={nav} setNav={setNav} artist={artist} />
        <ArtistAbout params={match.params.id} />
      </>
    );
  }
};

export default User;
