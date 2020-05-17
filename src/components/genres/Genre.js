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
  {
    console.log('!!', genres.genre);
  }
  return (
    <>
      <h1>{genres.genre}</h1>
      <hr></hr>

      {/* NEED TO ADD SINGLES && ALBUMS TO AN ARRAY THEN SORT BY DATE */}

      <div className='grid-3'>
        {/* {singles.length > 0 &&
          singles.map((single) => {
            return single.genres.map((genre) => {
              if (genre === match.params.genreId) {
                return (
                  <div key={single._id} className='card text-center py-2'>
                    <Link to={`/single/${single._id}`}>
                      <img src={single.img} style={{ width: '80%' }} alt='' />
                      <h3>
                        {single.title} - {single.artist}
                      </h3>
                    </Link>
                  </div>
                );
              }
            });
          })}

        {albums.map((album) => {
          return album.genres.map((genre) => {
            if (genre === match.params.genreId) {
              return (
                <div key={genre._id} className='card text-center py-2'>
                  <Link to={`/album/${album._id}`}>
                    <img src={album.img} style={{ width: '80%' }} alt='' />
                    <h3>
                      {album.title} -{album.artist}
                    </h3>
                  </Link>
                </div>
              );
            }
          });
        })} */}
      </div>
    </>
  );
};

export default Genre;
