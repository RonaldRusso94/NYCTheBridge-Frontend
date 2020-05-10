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

  if (
    albumsContext.featuredOn.length > 0 ||
    singlesContext.featuredOn.length > 0
  ) {
    return (
      <>
        <h3>Appears On</h3>

        {albumsContext.featuredOn.length > 0 &&
          albumsContext.featuredOn.map((album) => {
            return (
              <div className='card'>
                <img
                  src={album.img}
                  alt=''
                  style={{ height: '10%', width: '10%' }}
                />
                <h5>
                  {album.title} - {album.artist}
                </h5>
              </div>
            );
          })}

        {singlesContext.featuredOn.length > 0 &&
          singlesContext.featuredOn.map((single) => {
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
  } else {
    return null;
  }
};

export default ArtistFeatures;
