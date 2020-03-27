import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({
  artist: { id, artist_name, song_name, music_page_url, image_address }
}) => {
  return (
    <div className='card text-center py-2'>
      <Link to={`/artist/${id}`}>
        <img src={image_address} alt='' style={{ width: '80%' }} />
        <h3>
          {artist_name} - {song_name}
        </h3>
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  artist: PropTypes.object.isRequired
};

export default UserItem;
