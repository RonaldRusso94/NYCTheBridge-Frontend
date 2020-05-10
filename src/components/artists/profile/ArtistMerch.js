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
  }, []);

  return (
    <div>
      {merch.length > 0 && <h3>Merch</h3>}
      {merch.length > 0 &&
        merch.map((item) => {
          return (
            <div className='card'>
              <a href={item.link}>
                <img src={item.img} alt='' className='img-sm' />
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default ArtistMerch;
