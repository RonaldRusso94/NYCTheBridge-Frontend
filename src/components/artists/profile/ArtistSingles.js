import React, { useContext, useEffect } from 'react';
import SinglesContext from '../../../context/singles/singlesContext';

const ArtistSingles = ({ paramsId }) => {
  const singlesContext = useContext(SinglesContext);
  const { artistSingles, singles } = singlesContext;

  useEffect(() => {
    artistSingles(paramsId);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* Display artist singles */}
      {singles.length > 0 ? <h3>Singles</h3> : null}
      {singles.length > 0 &&
        singles.map((single) => {
          return (
            <div className='card' key={single._id}>
              <h4>{single.title}</h4>
              <img
                src={single.img}
                alt=''
                style={{ height: '10%', width: '10%' }}
              />
              <h5>SID: {single._id}</h5>
            </div>
          );
        })}
    </div>
  );
};

export default ArtistSingles;
