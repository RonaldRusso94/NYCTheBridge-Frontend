import React, { useState, useContext, useEffect } from 'react';
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

import api from '../../api';

const Genres = () => {
  //   const singlesContext = useContext(SinglesContext);
  //   const albumsContext = useContext(AlbumsContext);

  //   const { singles } = singlesContext;
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await api.get('/genres');
        setGenres(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);

  return (
    <div className='grid-3'>
      {genres.length > 0 &&
        genres.map((genre) => {
          // console.log('!!!', genre);
          return <GenreItem key={genre._id} genre={genre} />;
        })}
    </div>
  );
};

export default Genres;
