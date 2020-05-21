import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlbumsContext from '../../context/albums/albumsContext';

import api from '../../api';

const Album = ({ match }) => {
  const albumsContext = useContext(AlbumsContext);

  const { album, getAlbum } = albumsContext;
  const { title, _id, img, url, features, date, artist } = album;

  useEffect(() => {
    getAlbum(match.params.id);
  }, []);

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>

      <div className='d-flex py-1'>
        <div style={{ width: '20%' }}>
          <img src={img} alt='' style={{ width: '100%' }} />
        </div>

        <div className='px-2'>
          <p className='small'>ALBUM</p>
          <h1 className='pb-1'>{title}</h1>
          <p>By: {artist && artist.name}</p>
          <p>{date}</p>
        </div>
      </div>

      <div className='all-center py-3'>
        <iframe
          title={title}
          width='100%'
          height='500'
          scrolling='no'
          frameBorder='no'
          src={url}
          allowFullScreen
        ></iframe>
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
      </div>

      <div>
        <h2>Details:</h2>
        <div className='details'>
          <div className='artistDetails'>
            <p>{artist && artist.name}</p>
          </div>

          <div style={{ background: 'red', width: '70%' }}>
            <h5>
              <a href={artist && artist.social.facebook}>FB</a>
            </h5>
          </div>
        </div>

        <h3>Featured:</h3>
        {features &&
          features.map((feature) => {
            return (
              <div key={feature._id} className='details'>
                <div className='artistDetails'>
                  <p>{feature.name}</p>
                </div>
                <div style={{ background: 'red', width: '70%' }}>
                  <h5>
                    <a href={feature.social.facebook}>FB</a>
                  </h5>
                </div>
              </div>
            );
          })}
      </div>

      <div className='all-center py-3 card'>
        <h1>DISQUS FORM</h1>
      </div>
    </Fragment>
  );
};

export default Album;
