import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlbumsContext from '../../../context/albums/albumsContext';

const ArtistAlbums = ({ paramsId }) => {
  const albumsContext = useContext(AlbumsContext);
  const { artistAlbums, albums } = albumsContext;

  useEffect(() => {
    artistAlbums(paramsId);
    // eslint-disable-next-line
  }, []);

  albumsContext.albums
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    })
    .reverse();

  return (
    <>
      {albums.length > 0 && (
        <div className='card my-3'>
          {albums.length > 0 ? (
            <>
              <h3>Albums</h3>
              <hr className='mb-1' />
            </>
          ) : null}

          {albums.length > 0 &&
            albums.map((album) => {
              return (
                <div key={album._id} className='-3'>
                  <Link to={`/album/${album._id}`}>
                    <div className='layout-one mb-1' key={album._id}>
                      <div className='layout-item-one'>
                        <img src={album.img} alt='' className='' />
                      </div>

                      <div className='layout-item-two mb'>
                        <h5>{album.date.replace(/-.+/, ' ')}</h5>
                        <h2 className='title'>{album.title}</h2>
                      </div>
                    </div>
                  </Link>

                  <div className=''>
                    <div className='album-underline album-display'>
                      <h3 className='album-item-one'>#</h3>
                      <h3 className='album-item-two'>Title</h3>
                    </div>

                    {album.songs.map((song, index) => {
                      return (
                        <div
                          key={song._id}
                          className='album-underline album-display'
                        >
                          <p className='album-item-one'>{index + 1}.</p>
                          <p className='album-item-two' key={song._id}>
                            {song.songtitle}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default ArtistAlbums;
