import React, { useContext, useEffect } from 'react';
import AlbumsContext from '../../../context/albums/albumsContext';

const ArtistAlbums = ({ match, paramsId }) => {
  const albumsContext = useContext(AlbumsContext);
  const { artistAlbums, albums } = albumsContext;

  useEffect(() => {
    artistAlbums(paramsId);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {albums.length > 0 ? <h3>Albums</h3> : null}
      {albums.length > 0 &&
        albums.map((album) => {
          return (
            <div className='card' key={album._id}>
              <h4>{album.title}</h4>
              <h5>AID: {album._id}</h5>
              <img
                src={album.img}
                alt=''
                style={{ height: '10%', width: '10%' }}
              />

              {album.songs.map((song) => {
                return (
                  <p key={song._id} style={{ fontSize: '.7rem' }}>
                    {song.songtitle} - Song ID: {song._id}
                  </p>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default ArtistAlbums;
