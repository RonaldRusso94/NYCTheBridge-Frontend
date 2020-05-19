import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../context/singles/singlesContext';
import AlbumsContext from '../../context/albums/albumsContext';

import api from '../../api';

const Genre = ({ match }) => {
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const { singles, genreSingles } = singlesContext;
  const { albums, genreAlbums } = albumsContext;

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await api.get(`/genres/${match.params.genreId}`);
        genreSingles(match.params.genreId);
        genreAlbums(match.params.genreId);

        setGenres(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);

  const genresArr = [];

  albumsContext.albums.forEach((album) => {
    genresArr.push(album);
  });

  singlesContext.singles.forEach((single) => {
    genresArr.push(single);
  });

  console.log('!!!!!', genresArr);

  genresArr
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    })
    .reverse();
  return (
    <>
      <h1 className='py'>{genres.genre}</h1>
      <hr className='mb-1' />

      <div className='grid-3'>
        {genresArr.length > 0 &&
          genresArr.map((item) => {
            // If Single
            if ('video' in item) {
              return (
                <div key={item._id} className='item-container'>
                  <Link to={`/single/${item._id}`}>
                    <img src={item.img} alt='' />
                    <div className='text-wrapper'>
                      <h3 className='text-styles'>
                        {item.title} - {item.artist}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            } else {
              // If Album
              return (
                <div key={item._id} className='item-container'>
                  <Link to={`/album/${item._id}`}>
                    <img src={item.img} alt='' />
                    <div className='text-wrapper'>
                      <h3 className='text-styles'>
                        {item.title} - {item.artist}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};

export default Genre;
