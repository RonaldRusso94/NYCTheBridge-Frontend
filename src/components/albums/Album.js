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

  // if album is ever non existen this will break because there is nothing to destructure
  // is what I was getting at so just be a bit more defensive in your coding and do checks
  // for things before you even get here or along the way even if they are sometimes not necessary
  // then you can go back and refactor and take them out if not needed
  const { title, albumId } = album;

  /**
   * so because songs exists on albums, we have to make sure that songs exists on albums first so
   * we basically do this in ternary
   *
   * if (album.songs) {
   *  albums.songs.map(....)
   * } else {
   *  songs doesnt exist yet so it throws an error... usually instead of doing && which is a short circuit you would use a ternary
   * }
   */

  //  but basically any time that something can come through undefined or exists deeper
  //   inside of an object and might be emtpy or undefied you should check for it first

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <h1>
            {title} - {albumId}
            {console.log(albumId)}
          </h1>

          {album.songs &&
            album.songs.map(({ songtitle, artistsId }, index) => (
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
