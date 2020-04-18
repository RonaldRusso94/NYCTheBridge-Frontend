import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumItem = ({ album: { _id, artist, img, title, songs } }) => {
  return (
    <div className='item-container py-1'>
      <Link to={`/album/${_id}`}>
        <img src={img} alt='' />
        <div className='text-wrapper'></div>
        <h3 className='text-styles'>
          {title} - {artist}
        </h3>
      </Link>
    </div>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumItem;
