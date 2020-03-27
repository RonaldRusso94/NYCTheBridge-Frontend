import React, { useContext } from 'react';
import SinglesContext from '../../context/singles/singlesContext';
import AlbumsContext from '../../context/albums/albumsContext';
import GenreItem from './GenreItem';

const Genres = () => {
  //   const singlesContext = useContext(SinglesContext);
  //   const albumsContext = useContext(AlbumsContext);

  //   const { singles } = singlesContext;

  const genres = [
    {
      genre: 'classic',
      img: 'https://nycthebridge.com/images/JayMakkxYoungEsco_Interlude.jpg'
    },
    {
      genre: 'trap',
      img: 'https://nycthebridge.com/images/JayMakkxYoungEsco_Interlude.jpg'
    },
    {
      genre: 'drill',
      img: 'https://nycthebridge.com/images/JayMakkxYoungEsco_Interlude.jpg'
    },
    {
      genre: 'r&b',
      img: 'https://nycthebridge.com/images/JayMakkxYoungEsco_Interlude.jpg'
    }
    //  'spanish',
    //  'reggae',
    //  'pop',
    //  'freestyles',
    //  'instrumental'
  ];

  return (
    <div style={genresStyle}>
      {genres.map(genre => {
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
  gridGap: '1rem'
};

export default Genres;
