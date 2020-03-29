import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../context/singles/singlesContext';

const Single = ({ match }) => {
  const singlesContext = useContext(SinglesContext);

  const { getSingle, single } = singlesContext;

  useEffect(() => {
    getSingle(match.params.id);

    // eslint-disable-next-line
  }, []);

  const { title, singleId, singleImg } = single;

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <h1>
            {title} - {singleId}
          </h1>
          <img src={singleImg} alt='' style={{ width: '50%' }} />
        </div>
        <div className='all-center'></div>
      </div>
    </Fragment>
  );
};

export default Single;
