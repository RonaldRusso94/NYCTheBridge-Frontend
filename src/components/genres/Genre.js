import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../context/singles/singlesContext';
import AlbumsContext from '../../context/albums/albumsContext';

import api from '../../api';

const Genre = ({ match }) => {
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const { singles } = singlesContext;
  const { albums } = albumsContext;

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await api.get('/genres');
        setGenres(res.data);
        console.log('!!', res.data);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);

  return (
    <>
      {genres.map((genre) => {
        if (genre._id === match.params.genre) {
          return <h1>{genre.genre}</h1>;
        }
        console.log('!', genre);
      })}

      <hr></hr>
      <div className='grid-3'>
        {singles.map((single) => {
          return single.genres.map((genre) => {
            if (genre === match.params.genre) {
              return (
                <div className='card text-center py-2'>
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
            if (genre === match.params.genre) {
              return (
                <div className='card text-center py-2'>
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
        })}
        {/* {albums.map((album) => {
          return album.songs.map((song) => {
            return song.genre.map((x) => {
              if (x === match.params.genre) {
                return (
                  <div className='card text-center py-2'>
                    <Link to={`/album/${album.albumId}`}>
                      <img
                        src={album.albumImg}
                        style={{ width: '80%' }}
                        alt=''
                      />
                      <h3>
                        {album.title} -{album.artistId}
                      </h3>
                    </Link>
                  </div>
                );
              }
            });
          });
        })} */}
      </div>
    </>
  );
};

export default Genre;
