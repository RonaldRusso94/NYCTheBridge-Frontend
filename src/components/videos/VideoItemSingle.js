import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoItemSingle = ({
  single: { singleId, artistId, singleImg, title, songs }
}) => {
  return (
    <div className='card text-center py-3'>
      <Link to={`/single/${singleId}`}>
        <img src={singleImg} alt='' style={{ width: '80%' }} />
      </Link>
      <h3>
        {title} - {artistId}
      </h3>
    </div>
  );
};

VideoItemSingle.propTypes = {
  single: PropTypes.object.isRequired
};

export default VideoItemSingle;