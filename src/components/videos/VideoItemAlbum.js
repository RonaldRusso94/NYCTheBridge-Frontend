import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoItemAlbum = ({
  album: { albumId, artistId, albumImg, title, songs },
}) => {
  return (
    <div className='item-container'>
      <Link to={`/album/${albumId}`}>
        <img src={albumImg} alt='' />
      </Link>
      <div className='text-wrapper'>
        <h3 className='text-styles'>
          {title} - {artistId}
        </h3>
      </div>
    </div>
  );
};

VideoItemAlbum.propTypes = {
  album: PropTypes.object.isRequired,
};

export default VideoItemAlbum;
