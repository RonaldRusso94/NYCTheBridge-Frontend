import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ArtistsContext from '../../../context/artists/artistsContext';

import ArtistAlbums from './ArtistAlbums';
import ArtistSingles from './ArtistSingles';
import ArtistFeatures from './ArtistFeatures';
import ArtistMerch from './ArtistMerch';
// import Abc from './ArtistMerch';

export const ArtistOverview = (props) => {
  const artistsContext = useContext(ArtistsContext);

  const { getArtist, loading, artist } = artistsContext;
  const { _id, name, img } = artist;

  useEffect(() => {
    getArtist(props.paramsId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ArtistMerch paramsId={props.paramsId} />
      <ArtistAlbums paramsId={props.paramsId} />
      <ArtistSingles paramsId={props.paramsId} />
      <ArtistFeatures paramsId={props.paramsId} />
    </>
  );
};

export default ArtistOverview;
