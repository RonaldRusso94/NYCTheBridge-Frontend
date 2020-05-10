import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ArtistsContext from '../../../context/artists/artistsContext';
import AlbumsContext from '../../../context/albums/albumsContext';
import SinglesContext from '../../../context/singles/singlesContext';

import ArtistAlbums from './ArtistAlbums';
import ArtistSingles from './ArtistSingles';
import ArtistFeatures from './ArtistFeatures';
import ArtistMerch from './ArtistMerch';
// import Abc from './ArtistMerch';

import '../Artist.css';

export const ArtistOverview = (props) => {
  const artistsContext = useContext(ArtistsContext);
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const { getArtist, loading, artist } = artistsContext;

  const { albums } = albumsContext;
  const { _id, name, img } = artist;

  const { singles } = singlesContext;

  useEffect(() => {
    getArtist(props.paramsId);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {/* <div className='py-1'>
        <Link to='/' className='btn btn-dark'>
          Back
        </Link>
      </div> */}

      {/* <h3>Artist's Pick</h3>
      <div className='grid-3'>
        <div className='card '>
          {singlesContext.singles[0] ? (
            <img
              src={singlesContext.singles[0].img}
              alt=''
              style={{ width: '15%', height: '15%' }}
            />
          ) : null}
        </div>
        <div className='card'>
          {
            <h5>
              {singlesContext.singles[0]
                ? singlesContext.singles[0].title
                : null}
            </h5>
          }
        </div>
      </div> */}

      <ArtistAlbums paramsId={props.paramsId} />
      <ArtistSingles paramsId={props.paramsId} />
      <ArtistFeatures paramsId={props.paramsId} />
      <ArtistMerch paramsId={props.paramsId} />

      {/* <ArtistMerch paramsId={props.paramsId} /> */}

      {/* {appearsOnAlbums()}
      {appearsOnSingles()} */}

      {/* Needs fix */}
      {/* {albumsContext.albums.map((album) => {
        if (album.features.includes(props.paramsId)) {
          return <h3>Appears On</h3>;
        }
      }) ||
        singlesContext.singles.map((single) => {
          if (single.features.includes(props.paramsId)) {
            return <h3>Appears On</h3>;
          }
        })} */}

      {/* {appearsOnAlbums()}
      {appearsOnSingles()} */}

      {/* <div className='all-center'>
        <a href={instagram}>IG</a>
        <a href={music_page_url}>SC</a>
      </div> */}
    </Fragment>
  );
};

export default ArtistOverview;
