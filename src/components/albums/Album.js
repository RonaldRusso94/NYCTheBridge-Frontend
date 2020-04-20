import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlbumsContext from '../../context/albums/albumsContext';

import api from '../../api';

const Album = ({ match }) => {
  const albumsContext = useContext(AlbumsContext);

  const { album, getAlbum } = albumsContext;
  const { title, _id, img } = album;

  useEffect(() => {
    getAlbum(match.params.id);
  }, []);

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>
      <div className='card grid-2'>
        <img src={img} alt='' style={{ width: '50%' }} />
        <div className=''>
          <h3>Album</h3>
          <h2>{title}</h2>
          <h3>ID: {_id}</h3>
          <h5>{Date(Date.now())}</h5>
        </div>
      </div>
      <div className='all-center py-3 card'>
        <h1>PLAYER</h1>
      </div>
      <div className='all-center'>
        <p># Title Time</p>

        {album.songs &&
          album.songs.map((song, index) => {
            return (
              <div key={song._id}>
                <p style={{ textDecoration: 'underline', width: '100%' }}>
                  Track {index + 1} - {song.songtitle}
                </p>
              </div>
            );
          })}

        {/* {album.songs &&
          album.songs.map(({ songtitle }, index) => (
            <div key={_id}>
              {console.log(_id)}
              <p style={{ textDecoration: 'underline', width: '100%' }}>
                Track {index + 1} - {songtitle}
              </p>
            </div>
          ))} */}
      </div>
      <div className='all-center py-3 card'>
        <h1>DISQUS FORM</h1>
      </div>
    </Fragment>
  );
};

export default Album;
