import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumItem = ({ album: { _id, artist, img, title } }) => {
  return (
    <div className='item-container my-1'>
      <Link to={`/album/${_id}`}>
        <img src={img} alt='' />
        <div className='text-wrapper'>
          <h3 className='text-styles'>
            {title} - {artist}
          </h3>
        </div>
      </Link>
    </div>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumItem;
