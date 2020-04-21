import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../context/singles/singlesContext';
import AlbumsContext from '../../context/albums/albumsContext';

const Genre = ({ match }) => {
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const { singles } = singlesContext;
  const { albums } = albumsContext;

  console.log('TEST', singles);

  return (
    <>
      {/* <h1>{match.params.genre}</h1> */}
      <hr></hr>
      <div className='grid-3'>
        {/* {singles.map((single) =>
          single.genre.map((id) => {
            if (id === match.params.genre) {
              return (
                <div className='card text-center py-2'>
                  <Link to={`/single/${single._id}`}>
                    <img
                      src={single.img}
                      style={{ width: '80%' }}
                      alt=''
                    />
                    <h3>
                      {single.title} - {single.artist}
                    </h3>
                  </Link>
                </div>
              );
            }
          })
        )} */}
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
