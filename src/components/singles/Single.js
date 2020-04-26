import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../context/singles/singlesContext';

const Single = ({ match }) => {
  const singlesContext = useContext(SinglesContext);

  const { getSingle, single } = singlesContext;
  const { _id, artist, title, img, url, date, features } = single;

  useEffect(() => {
    getSingle(match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>

      <div className='d-flex py-1'>
        <div style={{ width: '20%' }}>
          <img src={img} alt='' style={{ width: '100%' }} />
        </div>

        <div className='px-2'>
          <p className='small'>SINGLE</p>
          <h1 className='pb-1'>{title}</h1>
          <p>By: {artist && artist.name}</p>
          <p>{date}</p>
        </div>
      </div>

      <div className='all-center py-3'>
        <iframe
          width='100%'
          height='500'
          scrolling='no'
          frameBorder='no'
          allow='autoplay'
          src={url}
        ></iframe>
      </div>

      <div>
        <h2>Details:</h2>
        <div className='details'>
          <div className='artistDetails'>
            <p>{artist && artist.name}</p>
          </div>

          <div style={{ background: 'red', width: '70%' }}>
            <h5>
              <a href={artist && artist.social.facebook}>FB</a>
            </h5>
          </div>
        </div>

        <h3>Featured:</h3>
        {features &&
          features.map((feature) => {
            return (
              <div className='details'>
                <div className='artistDetails'>
                  <p>{feature.name}</p>
                </div>
                <div style={{ background: 'red', width: '70%' }}>
                  <h5>
                    <a href={feature.social.facebook}>FB</a>
                  </h5>
                </div>
              </div>
            );
          })}
      </div>

      <div className='all-center py-3 card'>
        <h1>DISQUS FORM</h1>
      </div>
    </Fragment>
  );
};

export default Single;
