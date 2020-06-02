import React, { useState, useEffect } from 'react';

import api from '../../../api';

const ArtistMerch = ({ paramsId }) => {
  const [merch, setMerch] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await api.get(`/merch/${paramsId}`);
        setMerch(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {merch.length > 0 && (
        <div className='card my-3'>
          {merch.length > 0 && (
            <>
              <h3>Merch</h3>
              <hr className='mb-1' />
            </>
          )}
          <div className='grid-4'>
            {merch.length > 0 &&
              merch.map((item) => {
                return (
                  <div key={item._id} className=''>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {/* <a href={item.link}> */}
                      <img src={item.img} alt='' className='' />
                      {/* </a> */}
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default ArtistMerch;
