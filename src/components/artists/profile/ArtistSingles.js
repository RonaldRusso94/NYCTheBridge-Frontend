import React from 'react';
import 

const ArtistSingles = () => {
  return (
    <div>
      {/* Display artist singles */}
      {artistSingles.length > 0 ? <h3>Singles</h3> : null}
      {artistSingles.length > 0 &&
        artistSingles.map((single) => {
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
