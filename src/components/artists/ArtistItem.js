import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({
  artist: { id, artist_name, music_page_url, image_address },
}) => {
  return (
    <div className='item-container'>
      <Link to={`/artist/${id}`}>
        <img src={image_address} alt='' />
        <div className='text-wrapper'>
          <h3 className='text-styles'>{artist_name}</h3>
        </div>
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default UserItem;
