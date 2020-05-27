import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faSoundcloud,
  faYoutubeSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const ArtistHeader = ({ artist, setNav }) => {
  const onClick = (e) => {
    setNav(e.target.getAttribute('name'));
  };

  return (
    <div className='artist-img mb-2'>
      <img className='' src={artist.headerimg} alt='' />
      <h1 className='name'>{artist.name}</h1>
      <ul className='profile-nav-list'>
        <li name='overview' onClick={onClick} className='profile-nav-links'>
          Overview
        </li>
        <li name='about' onClick={onClick} className='profile-nav-links'>
          About
        </li>
      </ul>

      {artist && (
        <div className='socials'>
          {artist.website && (
            <a href={artist.website}>
              <FontAwesomeIcon icon={faGlobeAmericas} size='lg' />
            </a>
          )}
          {artist.social && artist.social.youtube && (
            <a href={artist.social.youtube}>
              <FontAwesomeIcon icon={faYoutubeSquare} size='lg' />
            </a>
          )}

          {artist.social && artist.social.twitter && (
            <a href={artist.social.twitter}>
              <FontAwesomeIcon icon={faTwitterSquare} size='lg' />
            </a>
          )}
          {artist.social && artist.social.facebook && (
            <a href={artist.social.facebook}>
              <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
            </a>
          )}
          {artist.social && artist.social.instagram && (
            <a href={artist.social.instagram}>
              <FontAwesomeIcon icon={faInstagramSquare} size='lg' />
            </a>
          )}
          {artist.social && artist.social.soundcloud && (
            <a href={artist.social.soundcloud}>
              <FontAwesomeIcon icon={faSoundcloud} size='lg' />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ArtistHeader;
