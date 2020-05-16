import React, { Fragment, useContext } from 'react';

import Artists from '../artists/Artists';

const Home = () => {
  return (
    <Fragment>
      <h1 className='text-center py-1'>Most Recent</h1>
      <Artists />
    </Fragment>
  );
};

export default Home;
