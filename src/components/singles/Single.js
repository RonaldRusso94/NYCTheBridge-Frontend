import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../context/singles/singlesContext';

import { DiscussionEmbed } from 'disqus-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faSoundcloud,
  faYoutubeSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Single = ({ match }) => {
  const singlesContext = useContext(SinglesContext);

  const { getSingle, single } = singlesContext;
  const { _id, artist, title, img, date, features } = single;

  useEffect(() => {
    getSingle(match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>

      <div className='card single-header my-1'>
        <div className='single-img'>
          <img src={img} alt='' />
        </div>

        <div className='single-info'>
          <p className='small'>SINGLE</p>
          <h1 className='title'>{title}</h1>
          <p>
            By:{' '}
            <span style={{ textDecoration: 'underline' }}>
              {artist && (
                <Link to={`/artist/${artist._id}`}>
                  {artist && artist.name}
                </Link>
              )}
            </span>
          </p>
          <p>{date && date.replace(/-.+/, ' ')}</p>
        </div>
      </div>

      <div className='card2 all-center my-3'>
        <iframe
          title={single.url}
          width='100%'
          height='500'
          scrolling='no'
          frameBorder='no'
          allow='autoplay'
          src={single.url}
        ></iframe>
      </div>

      <div className='card my-3'>
        <h2 className=''>Details:</h2>
        <hr className='mb-1' />
        <div className='details'>
          <div className='details-artist'>
            <p>
              <span style={{ textDecoration: 'underline' }}>
                {artist && (
                  <Link to={`/artist/${artist._id}`}>
                    {artist && artist.name}
                  </Link>
                )}
              </span>
            </p>
          </div>

          {artist && (
            <div className='details-socials'>
              {artist.website && (
                <a href={artist.website}>
                  <FontAwesomeIcon icon={faGlobeAmericas} size='lg' />
                </a>
              )}
              {artist.social.youtube && (
                <a href={artist.social.youtube}>
                  <FontAwesomeIcon icon={faYoutubeSquare} size='lg' />
                </a>
              )}
              {artist.social.twitter && (
                <a href={artist.social.twitter}>
                  <FontAwesomeIcon icon={faTwitterSquare} size='lg' />
                </a>
              )}
              {artist.social.facebook && (
                <a href={artist.social.facebook}>
                  <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
                </a>
              )}
              {artist.social.instagram && (
                <a href={artist.social.instagram}>
                  <FontAwesomeIcon icon={faInstagramSquare} size='lg' />
                </a>
              )}
              {artist.social.soundcloud && (
                <a href={artist.social.soundcloud}>
                  <FontAwesomeIcon icon={faSoundcloud} size='lg' />
                </a>
              )}
            </div>
          )}
        </div>
        {features !== undefined && features.length > 0 && (
          <>
            <h3 className='featured-title'>Featured:</h3>
            <hr className='mb-1' />
          </>
        )}
        {features !== undefined &&
          features.length > 0 &&
          features.map((feature) => {
            return (
              <div key={feature._id} className='details'>
                <div className='details-artist'>
                  <p>
                    <span style={{ textDecoration: 'underline' }}>
                      <Link to={`/artist/${feature._id}`}>{feature.name}</Link>
                    </span>
                  </p>
                </div>

                <div className='details-socials'>
                  {feature.website && (
                    <a href={feature.website}>
                      <FontAwesomeIcon icon={faGlobeAmericas} size='lg' />
                    </a>
                  )}
                  {feature.social.youtube && (
                    <a href={feature.social.youtube}>
                      <FontAwesomeIcon icon={faYoutubeSquare} size='lg' />
                    </a>
                  )}
                  {feature.social.twitter && (
                    <a href={feature.social.twitter}>
                      <FontAwesomeIcon icon={faTwitterSquare} size='lg' />
                    </a>
                  )}
                  {feature.social.facebook && (
                    <a href={feature.social.facebook}>
                      <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
                    </a>
                  )}
                  {feature.social.instagram && (
                    <a href={feature.social.instagram}>
                      <FontAwesomeIcon icon={faInstagramSquare} size='lg' />
                    </a>
                  )}
                  {feature.social.soundcloud && (
                    <a href={feature.social.soundcloud}>
                      <FontAwesomeIcon icon={faSoundcloud} size='lg' />
                    </a>
                  )}
                  {/* {feature.social.map(item => {
                    <h5>
                      a
                    </h5>
                  })} */}
                </div>
              </div>
            );
          })}
      </div>
      <div className='card my-3'>
        <DiscussionEmbed
          shortname='the-bridge-nyc'
          config={{
            url: window.location.href,
            identifier: _id,
            title: title,
          }}
        />
      </div>
    </Fragment>
  );
};

export default Single;
