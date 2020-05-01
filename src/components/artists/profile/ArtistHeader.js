import React from 'react';
import '../Artist.css';

const ArtistHeader = ({ artist, setNav }) => {
  const onClick = (e) => {
    setNav(e.target.getAttribute('name'));
  };

  return (
    <>
      <div className='artist-img'>
        <img className='' src={artist.img} alt='' />
        <h1 className='name'>{artist.name}</h1>
        <ul className='profile-nav-list'>
          <li name='overview' onClick={onClick} className='profile-nav-links'>
            Overview
          </li>
          <li name='about' onClick={onClick} className='profile-nav-links'>
            About
          </li>
        </ul>
      </div>
    </>
  );
};

export default ArtistHeader;
