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
      <div className='socials'>
        <a href='#'>
          <FontAwesomeIcon icon={faGlobeAmericas} size='lg' />
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faYoutubeSquare} size='lg' />
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faTwitterSquare} size='lg' />
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faInstagramSquare} size='lg' />
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faSoundcloud} size='lg' />
        </a>
      </div>
    </div>
  );
};

export default ArtistHeader;
