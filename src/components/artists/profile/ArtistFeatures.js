import React, { useContext, useEffect } from 'react';
import SinglesContext from '../../../context/singles/singlesContext';
import AlbumsContext from '../../../context/albums/albumsContext';

const ArtistFeatures = ({ paramsId }) => {
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const { featuredOnSingle } = singlesContext;
  const { featuredOnAlbum } = albumsContext;

  useEffect(() => {
    featuredOnSingle(paramsId);
    featuredOnAlbum(paramsId);
    // eslint-disable-next-line
  }, []);

  const featuredOnArr = [];

  albumsContext.featuredOn.forEach((feature) => {
    featuredOnArr.push(feature);
  });

  singlesContext.featuredOn.forEach((feature) => {
    featuredOnArr.push(feature);
  });

  featuredOnArr
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    })
    .reverse();

  if (
    albumsContext.featuredOn.length > 0 ||
    singlesContext.featuredOn.length > 0
  ) {
    return (
      <>
        <h3>Appears On</h3>
        <hr className='mb-1' />

        <div className='grid-4'>
          {featuredOnArr.map((item) => {
            return (
              <div key={item._id}>
                <img src={item.img} alt='' />
                <h5>{item.title}</h5>
                <h5>{item.date.replace(/-.+/, ' ')}</h5>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default ArtistFeatures;
