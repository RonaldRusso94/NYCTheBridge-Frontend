import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import ArtistsContext from '../../context/artists/artistsContext';

const User = ({ match }) => {
  const artistsContext = useContext(ArtistsContext);

  const { getArtist, loading, artist } = artistsContext;

  useEffect(() => {
    getArtist(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    id,
    artist_name,
    song_name,
    music_page_url,
    image_address,
    instagram
  } = artist;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-dark'>
        Back
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <h1>
            {artist_name} - {song_name}
          </h1>
          <img src={image_address} alt='' style={{ width: '75%' }} />
        </div>
        <div className='all-center'>
          <a href={instagram}>IG</a>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
