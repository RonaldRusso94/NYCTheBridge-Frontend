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
    // console.log('arrAlbum', featuredOnArr);
  });
  // console.log('ALBUM FINISHED');

  singlesContext.featuredOn.forEach((feature) => {
    featuredOnArr.push(feature);
    // console.log('arrSingle', featuredOnArr);
  });

  // console.log('SINGLE FINISHED', featuredOnArr);

  // featuredOnArr.sort(function (a, b) {
  //   var dateA = new Date(a.date),
  //     dateB = new Date(b.date);
  //   return dateB - dateA;
  // });

  featuredOnArr
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    })
    .reverse();

  // featuredOnArr.sort(function (a, b) {
  //   return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
  // });

  console.log('AFTER', featuredOnArr);

  if (
    albumsContext.featuredOn.length > 0 ||
    singlesContext.featuredOn.length > 0
  ) {
    return (
      <>
        <h3>Appears On</h3>
        <hr className='mb-1' />

        {/* {albumsContext.featuredOn.length > 0 &&
          albumsContext.featuredOn.map((album) => {
            return (
              <div key={album._id} className='grid-4'>
                <div>
                  <img src={album.img} alt='' />
                  <h5>{album.title}</h5>
                  <h5>{album.date.replace(/-.+/, ' ')}</h5>
                </div>
              </div>
            );
          })} */}
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
        {/* <div className='grid-4'>
          {singlesContext.featuredOn.length > 0 &&
            singlesContext.featuredOn.map((single) => {
              return (
                <div key={single._id}>
                  <img src={single.img} alt='' />
                  <h5>{single.title}</h5>
                  <h5>{single.date.replace(/-.+/, ' ')}</h5>
                </div>
              );
            })}
        </div> */}
      </>
    );
  } else {
    return null;
  }
};

export default ArtistFeatures;
