import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../../context/singles/singlesContext';

const ArtistSingles = ({ paramsId }) => {
  const singlesContext = useContext(SinglesContext);
  const { artistSingles, singles } = singlesContext;

  useEffect(() => {
    artistSingles(paramsId);
    // eslint-disable-next-line
  }, []);

  singlesContext.singles
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    })
    .reverse();

  return (
    <>
      {singles.length > 0 && (
        <div className='card my-3'>
          {/* Display artist singles */}
          {singles.length > 0 ? (
            <div>
              <h3>Singles & EPs</h3>
              <hr className='mb-1' />
            </div>
          ) : null}
          {singles.length > 0 &&
            singles.map((single) => {
              return (
                <div className='layout-one mb-1' key={single._id}>
                  <Link to={`/single/${single._id}`}>
                    <div className='layout-item-one'>
                      <img src={single.img} alt='' />
                    </div>

                    <div className='layout-item-two'>
                      <h5>{single.date.replace(/-.+/, ' ')}</h5>
                      <h2 className='title'>{single.title}</h2>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default ArtistSingles;
