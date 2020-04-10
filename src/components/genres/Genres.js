import React, { useContext } from 'react';
import SinglesContext from '../../context/singles/singlesContext';
import AlbumsContext from '../../context/albums/albumsContext';
import GenreItem from './GenreItem';

import Classic from '../layout/images/Classic.jpg';
import Trap from '../layout/images/Trap.jpg';

import Drill from '../layout/images/Drill.jpg';
import Rb from '../layout/images/R&B.jpg';
import Spanish from '../layout/images/Spanish.jpg';
import Reggae from '../layout/images/Reggae.jpg';
import Freestyle from '../layout/images/Freestyle.jpg';
import Instrumental from '../layout/images/Instrumental.jpg';

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
      genre: 'drill',
      img: Drill,
    },
    {
      genre: 'freestyle',
      img: Freestyle,
    },
    {
      genre: 'instrumental',
      img: Instrumental,
    },
    {
      genre: 'reggae',
      img: Reggae,
    },
    {
      genre: 'r&b',
      img: Rb,
    },
    {
      genre: 'spanish',
      img: Spanish,
    },
    {
      genre: 'trap',
      img: Trap,
    },

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
