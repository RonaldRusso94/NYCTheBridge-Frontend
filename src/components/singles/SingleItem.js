import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleItem = ({ single: { _id, artist, img, title } }) => {
  return (
    <div className='item-container my-1'>
      <Link to={`/single/${_id}`}>
        <img src={img} alt='' />
        <div className='text-wrapper'>
          <h3 className='text-styles'>
            {title} - {artist.name}
          </h3>
        </div>
      </Link>
    </div>
  );
};

SingleItem.propTypes = {
  single: PropTypes.object.isRequired,
};

export default SingleItem;
