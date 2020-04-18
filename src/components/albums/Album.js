import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlbumsContext from '../../context/albums/albumsContext';

import api from '../../api';

const Album = ({ match }) => {
  // const albumsContext = useContext(AlbumsContext);

  // const { album, getAlbum } = albumsContext;

  const [album, setAlbum] = useState([]);

  // useEffect(() => {
  //   getAlbum(match.params.id);

  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await api.get('/albums/:albumId');
        console.log('From Album', res.data);
        setAlbum(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);

  // if album is ever non existen this will break because there is nothing to destructure
  // is what I was getting at so just be a bit more defensive in your coding and do checks
  // for things before you even get here or along the way even if they are sometimes not necessary
  // then you can go back and refactor and take them out if not needed
  const { title, _id, img } = album;

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
        <img src={img} alt='' style={{ width: '50%' }} />
        <div className=''>
          <h3>Album</h3>
          <h2>{title}</h2>
          <h3>{_id}</h3>
          <h5>{Date(Date.now())}</h5>
        </div>
      </div>
      <div className='all-center py-3 card'>
        <h1>PLAYER</h1>
      </div>
      <div className='all-center'>
        <p># Title Time</p>
        {album.songs &&
          album.songs.map(({ songtitle, artistsId }, index) => (
            <div key={index}>
              <p style={{ textDecoration: 'underline', width: '100%' }}>
                Track {index + 1} - {songtitle}
              </p>
            </div>
          ))}
      </div>
      <div className='all-center py-3 card'>
        <h1>DISQUS FORM</h1>
      </div>
    </Fragment>
  );
};

export default Album;
