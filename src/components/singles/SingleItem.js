import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleItem = ({
  single: { singleId, artistId, singleImg, title, songs },
}) => {
  return (
    <div className='item-container py-1'>
      <Link to={`/single/${singleId}`}>
        <img src={singleImg} alt='' />
        <div className='text-wrapper'>
          <h3 className='text-styles'>
            {title} - {artistId}
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
