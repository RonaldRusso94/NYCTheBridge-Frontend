import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlbumsContext from '../../context/albums/albumsContext';

const Album = ({ match }) => {
  const albumsContext = useContext(AlbumsContext);

  const { getAlbum, album } = albumsContext;

  useEffect(() => {
    getAlbum(match.params.id);

    // eslint-disable-next-line
  }, []);

  const { title, albumId } = album;

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <h1>
            {title} - {albumId}
          </h1>

          {album.songs &&
            album.songs.map(({ songtitle }, index) => (
              <div key={index}>
                <h2>
                  Track {index + 1} - {songtitle}
                </h2>
              </div>
            ))}
        </div>
        <div className='all-center'></div>
      </div>
    </Fragment>
  );
};

export default Album;
