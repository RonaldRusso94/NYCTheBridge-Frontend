import React, { useContext, useEffect } from 'react';
import SinglesContext from '../../../context/singles/singlesContext';
import AlbumsContext from '../../../context/albums/albumsContext';

const ArtistFeatures = ({ paramsId }) => {
  const singlesContext = useContext(SinglesContext);
  const { featuredOnSingle, featuredOn } = singlesContext;

  useEffect(() => {
    featuredOnSingle(paramsId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {featuredOn.length > 0 && console.log('!!!!!!!!', featuredOn)}
      {featuredOn.length > 0 &&
        featuredOn.map((single) => {
          return (
            <div className='card'>
              <img
                src={single.img}
                alt=''
                style={{ height: '10%', width: '10%' }}
              />
              <h5>
                {single.title} - {single.artist}
              </h5>
            </div>
          );
        })}
    </>
  );
};

export default ArtistFeatures;
