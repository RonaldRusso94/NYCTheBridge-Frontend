import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlbumsContext from '../../context/albums/albumsContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faSoundcloud,
  faYoutubeSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

import './Album.css';

const Album = ({ match }) => {
  const albumsContext = useContext(AlbumsContext);

  const { album, getAlbum } = albumsContext;
  const { title, _id, img, url, features, date, artist, songs } = album;

  useEffect(() => {
    getAlbum(match.params.id);
  }, []);

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>

      <div className='card album-header my-1'>
        <div className='album-img'>
          <img src={img} alt='' />
        </div>

        <div className='album-info'>
          <p className='small'>ALBUM</p>
          <h1 className='title'>{title}</h1>
          <p>By: {artist && artist.name}</p>
          <p>{date && date.replace(/-.+/, ' ')}</p>
        </div>
      </div>

      <div className=' card2 iframe-div'>
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

      <div className='card'>
        <div className='album-underline album-display'>
          <h3 className='album-item-one'>#</h3>
          <h3 className='album-item-two'>Title</h3>
        </div>

        {album.songs &&
          album.songs.map((song, index) => {
            return (
              <div key={song._id} className='album-underline album-display'>
                <p className='album-item-one'>{index + 1}.</p>
                <p className='album-item-two' key={song._id}>
                  {song.songtitle}
                </p>
              </div>
            );
          })}
      </div>

      <div className='card my-3'>
        <h2 className=''>Details:</h2>
        <hr className='mb-1' />
        <div className='details'>
          <div className='details-artist'>
            <p>{artist && artist.name}</p>
          </div>

          {artist && (
            <div className='details-socials'>
              {artist.website && (
                <a href={artist.website}>
                  <FontAwesomeIcon icon={faGlobeAmericas} size='lg' />
                </a>
              )}
              {artist.social.youtube && (
                <a href={artist.social.youtube}>
                  <FontAwesomeIcon icon={faYoutubeSquare} size='lg' />
                </a>
              )}
              {artist.social.twitter && (
                <a href={artist.social.twitter}>
                  <FontAwesomeIcon icon={faTwitterSquare} size='lg' />
                </a>
              )}
              {artist.social.facebook && (
                <a href={artist.social.facebook}>
                  <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
                </a>
              )}
              {artist.social.instagram && (
                <a href={artist.social.instagram}>
                  <FontAwesomeIcon icon={faInstagramSquare} size='lg' />
                </a>
              )}
              {artist.social.soundcloud && (
                <a href={artist.social.soundcloud}>
                  <FontAwesomeIcon icon={faSoundcloud} size='lg' />
                </a>
              )}
            </div>
          )}
        </div>

        {features != undefined &&
          features.lenght > 0 &&
          ((
            <>
              <h3 className='featured-title'>Featured:</h3>
              <hr className='mb-1' />
            </>
          ),
          features &&
            features.map((feature) => {
              return (
                <div key={feature._id} className='details'>
                  <div className='details-artist'>
                    <p>{feature.name}</p>
                  </div>

                  <div className='details-socials'>
                    {feature.website && (
                      <a href=''>
                        <FontAwesomeIcon icon={faGlobeAmericas} size='lg' />
                      </a>
                    )}
                    {feature.social.facebook && (
                      <a href=''>
                        <FontAwesomeIcon icon={faYoutubeSquare} size='lg' />
                      </a>
                    )}
                    {feature.social.twitter && (
                      <a href=''>
                        <FontAwesomeIcon icon={faTwitterSquare} size='lg' />
                      </a>
                    )}
                    {feature.social.facebook && (
                      <a href=''>
                        <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
                      </a>
                    )}
                    {feature.social.instagram && (
                      <a href=''>
                        <FontAwesomeIcon icon={faInstagramSquare} size='lg' />
                      </a>
                    )}
                    {feature.social.soundcloud && (
                      <a href=''>
                        <FontAwesomeIcon icon={faSoundcloud} size='lg' />
                      </a>
                    )}
                    {/* {feature.social.map(item => {
                    <h5>
                      a
                    </h5>
                  })} */}
                  </div>
                </div>
              );
            }))}
      </div>

      <div className='all-center py-3 card'>
        <h1>DISQUS FORM</h1>
      </div>
    </Fragment>
  );
};

export default Album;
