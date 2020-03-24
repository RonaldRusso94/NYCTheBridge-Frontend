import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumItem = ({
  album: { albumId, artistId, albumImg, title, songs }
}) => {
  return (
    <div className='card text-center py-3'>
      <Link to={`/album/${albumId}`}>
        <img src={albumImg} alt='' style={{ width: '80%' }} />
      </Link>
      <h3>
        {title} - {artistId}
      </h3>
    </div>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired
};

export default AlbumItem;
