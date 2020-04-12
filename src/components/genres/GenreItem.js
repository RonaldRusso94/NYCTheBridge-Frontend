import React from 'react';
import { Link } from 'react-router-dom';

const GenreItem = ({ genre: { genre, img } }) => {
  return (
    <div className='item-container'>
      <Link to={`/browse/genres/${genre}`}>
        <img src={img} alt='' />
        <div className='text-wrapper'>
          <h3 className='text-styles'>{genre}</h3>
        </div>
      </Link>
    </div>
  );
};

export default GenreItem;
