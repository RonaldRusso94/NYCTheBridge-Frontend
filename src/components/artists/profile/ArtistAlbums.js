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

  return (
    <div className=''>
      {/* <div className='d-flex'>
        <div className='layout-one'>
          <h1>hello</h1>
        </div>
        <div className='layout-two'>
          <h1>World</h1>
        </div>
      </div> */}

      {albums.length > 0 ? (
        <>
          <h3>Albums</h3>
          <hr className='mb-1' />
        </>
      ) : null}

      {albums.length > 0 &&
        albums.map((album) => {
          return (
            <div className='mb-3'>
              <Link to={`/album/${album._id}`}>
                <div className='layout-one mb-1' key={album._id}>
                  <div className='layout-item-one'>
                    <img src={album.img} alt='' className='' />
                  </div>

                  <div className='layout-item-two mb'>
                    <h5>{album.date}</h5>
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
                    <div className='album-underline album-display'>
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
  );
};

export default ArtistAlbums;
