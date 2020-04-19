import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../context/singles/singlesContext';
import ArtistsContext from '../../context/artists/artistsContext';

const Single = ({ match }) => {
  const singlesContext = useContext(SinglesContext);
  // const artistsContext = useContext(ArtistsContext);

  const { getSingle, single } = singlesContext;
  // const { artist_name } = artistsContext.artists;
  const { _id, artist, title, img } = single;
  // const { name = '' } = artist;
  // let artsitNameList = [];

  useEffect(() => {
    getSingle(match.params.id);

    // eslint-disable-next-line
  }, []);

  //get artists from artistID
  // const getArtistList = (commas) => {
  //   return artistId.map((singleIdNumber, index) => {
  //     return artistsContext.artists.map((x) => {
  //       if (commas) {
  //         if (x.id == singleIdNumber)
  //           return x.artist_name + (index == artistId.length - 1 ? '' : ', ');
  //       } else {
  //         if (x.id == singleIdNumber) return x.artist_name;
  //       }
  //     });
  //   });
  // };

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>
      <div className='card grid-2'>
        <img src={img} alt='' style={{ width: '50%' }} />
        <div className=''>
          <h3>Single</h3>
          <h2>
            {artist && artist.name} - {title}
          </h2>
          <h3>ID: {_id}</h3>
          <h5>{Date(Date.now())}</h5>
        </div>
      </div>
      <div className='all-center py-3 card'>
        <h1>PLAYER</h1>
      </div>
      <div className='all-center py-3 card'>
        <h1>DISQUS FORM</h1>
      </div>
    </Fragment>
  );
};

export default Single;
