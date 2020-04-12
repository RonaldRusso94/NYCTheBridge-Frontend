import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../context/singles/singlesContext';
import AlbumsContext from '../../context/albums/albumsContext';

const Genre = ({ match }) => {
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const { singles } = singlesContext;
  const { albums } = albumsContext;

  const doesMatch = (genre) => {};

  return (
    <>
      <h1>{match.params.genre}</h1>
      <hr></hr>
      <div style={genresStyle}>
        {singles.map((single) =>
          single.genre.map((x) => {
            if (x === match.params.genre) {
              return (
                <div className='card text-center py-2'>
                  <Link to={`/single/${single.singleId}`}>
                    <img
                      src={single.singleImg}
                      style={{ width: '80%' }}
                      alt=''
                    />
                    <h3>
                      {single.title} - {single.artistId}
                    </h3>
                  </Link>
                </div>
              );
            }
          })
        )}
        {albums.map((album) => {
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
        })}
      </div>
    </>
  );
};

const genresStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Genre;
