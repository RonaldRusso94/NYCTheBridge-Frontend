import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AlbumsContext from '../../context/albums/albumsContext';
import SinglesContext from '../../context/singles/singlesContext';

const Home = () => {
  const albumsContext = useContext(AlbumsContext);
  const singlesContext = useContext(SinglesContext);

  const { getAlbums } = albumsContext;
  const { getSingles } = singlesContext;

  useEffect(() => {
    getAlbums();
    getSingles();
    // eslint-disable-next-line
  }, []);

  const mostRecent = [];
  albumsContext.albums.forEach((album) => {
    mostRecent.push(album);
  });

  singlesContext.singles.forEach((single) => {
    mostRecent.push(single);
  });

  mostRecent
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    })
    .reverse();

  return (
    <Fragment>
      {/* {console.log('singles', singles)}
      {console.log('albums', albums)}
      {console.log('mostRecent', mostRecent)} */}

      <h1 className='text-center py-1'>Most Recent</h1>

      <div className='grid-3'>
        {mostRecent.map((item) => {
          if ('video' in item) {
            return (
              <div key={item._id} className='item-container'>
                <Link to={`/single/${item._id}`}>
                  <img src={item.img} alt='' />
                  <div className='text-wrapper'>
                    <h3 className='text-styles'>
                      {item.title} - {item.artist.name}
                    </h3>
                  </div>
                  {/* <h5>{item.title}</h5>
                  <h5>{item.date.replace(/-.+/, ' ')}</h5> */}
                </Link>
              </div>
            );
          } else {
            return (
              <div key={item._id} className='item-container'>
                <Link to={`/album/${item._id}`}>
                  <img src={item.img} alt='' />
                  <div className='text-wrapper'>
                    <h3 className='text-styles'>
                      {item.title} - {item.artist.name}
                    </h3>
                    {console.log('!!!!', item.artist)}
                  </div>
                  {/* <h5>{item.title}</h5>
                  <h5>{item.date.replace(/-.+/, ' ')}</h5> */}
                </Link>
              </div>
            );
          }
        })}
      </div>
    </Fragment>
  );
};

export default Home;
