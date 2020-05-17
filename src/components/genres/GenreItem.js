import React from 'react';
import { Link } from 'react-router-dom';

const GenreItem = ({ genre: { genre, img, _id } }) => {
  return (
    <div className='item-container my-1'>
      <Link to={`/browse/genres/${_id}`}>
        <img src={img} alt='' />
        <div className='text-wrapper'>
          <h3 className='text-styles'>{genre}</h3>
        </div>
      </Link>
    </div>
  );
};

export default GenreItem;
