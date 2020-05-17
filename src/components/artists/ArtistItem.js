import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ artist: { _id, img, name } }) => {
  return (
    <div className='item-container'>
      <Link to={`/artist/${_id}`}>
        <img src={img} alt='' />
        <div className='text-wrapper'>
          <h3 className='text-styles'>{name}</h3>
        </div>
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default UserItem;
