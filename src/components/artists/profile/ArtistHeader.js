import React from 'react';

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
    </div>
  );
};

export default ArtistHeader;
