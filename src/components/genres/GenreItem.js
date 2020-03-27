import React from 'react';
import { Link } from 'react-router-dom';

const GenreItem = ({ genre: { genre, img } }) => {
  return (
    <div className='card text-center py-2'>
      <Link to={`/genre/${genre}`}>
        <img src={img} style={{ width: '80%' }} alt='' />
        <h3>{genre}</h3>
      </Link>
    </div>
  );
};

export default GenreItem;
