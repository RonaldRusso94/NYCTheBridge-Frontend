import React, { useContext } from 'react';
import SinglesContext from '../../context/singles/singlesContext';
import AlbumsContext from '../../context/albums/albumsContext';
import GenreItem from './GenreItem';

import Classic from '../layout/images/Classic.jpeg';
import Trap from '../layout/images/Trap.jpg';

import Drill from '../layout/images/Drill.jpg';
import Rb from '../layout/images/R&B.jpeg';

const Genres = () => {
  //   const singlesContext = useContext(SinglesContext);
  //   const albumsContext = useContext(AlbumsContext);

  //   const { singles } = singlesContext;

  const genres = [
    {
      genre: 'classic',
      img: Classic,
    },
    {
      genre: 'trap',
      img: Trap,
    },
    {
      genre: 'drill',
      img: Drill,
    },
    {
      genre: 'r&b',
      img: Rb,
    },
    //  'spanish',
    //  'reggae',
    //  'pop',
    //  'freestyles',
    //  'instrumental'
  ];

  return (
    <div style={genresStyle}>
      {genres.map((genre) => {
        return <GenreItem key={genre.genre} genre={genre} />;
      })}

      {/* {singles.map(single => {
        console.log(single.genre);
      })} */}
    </div>
  );
};

const genresStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Genres;
