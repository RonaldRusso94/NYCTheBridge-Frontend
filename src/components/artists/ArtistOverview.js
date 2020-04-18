import React, { Fragment, useEffect, useContext, useState } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import ArtistsContext from '../../context/artists/artistsContext';
import AlbumsContext from '../../context/albums/albumsContext';
import SinglesContext from '../../context/singles/singlesContext';

export const ArtistOverview = (props) => {
  const artistsContext = useContext(ArtistsContext);
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const { getArtist, loading, artist } = artistsContext;
  console.log('WORKING', artist);

  const { _id, name, img } = artist;

  useEffect(() => {
    getArtist(props.params);
    // eslint-disable-next-line
    console.log('PROPS.PARAMS', props.params);
  }, []);

  const getAlbum = () => {
    return albumsContext.albums.map((album) => {
      return album.artistId.map((artist) => {
        if (artist === props.params) {
          return (
            <div className='card'>
              <h4>{album.title}</h4>

              <img
                src={album.albumImg}
                alt=''
                style={{ height: '10%', width: '10%' }}
              />

              <p style={{ fontSize: '12px' }}>
                {album.songs.map((song) => {
                  return <div>{song.songtitle}</div>;
                })}
              </p>
            </div>
          );
        }
      });
    });
  };

  const getSingles = () => {
    return singlesContext.singles.map((single) => {
      return single.artistId.map((artist) => {
        if (artist === props.params) {
          return (
            <div className='card'>
              <img
                src={single.singleImg}
                alt=''
                style={{ height: '10%', width: '10%' }}
              />
              <p style={{ fontSize: '12px' }}>{single.title}</p>
            </div>
          );
        }
      });
    });
  };

  const appearsOnAlbums = () => {
    // Searchs Albums
    return albumsContext.albums.map((album) => {
      return album.songs.map((song) => {
        return song.features.map((artist) => {
          if (artist === props.params)
            return (
              <div>
                <img
                  src={album.albumImg}
                  alt=''
                  style={{ height: '10%', width: '10%' }}
                />
                <p style={{ fontSize: '12px' }}>{song.songtitle}</p>
              </div>
            );
        });
      });
    });
  };

  const appearsOnSingles = () => {
    return singlesContext.singles.map((single) => {
      return single.features.map((artist) => {
        if (artist === props.params) {
          return (
            <div className='card'>
              <img
                src={single.singleImg}
                alt=''
                style={{ height: '10%', width: '10%' }}
              />
              <p style={{ fontSize: '12px' }}>{single.title}</p>
            </div>
          );
        }
      });
    });
  };

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div>
        <Link to='/' className='btn btn-dark'>
          Back
        </Link>
      </div>
      <br></br>
      <div className='card'>
        <div>
          <a className='all-center'>
            <h1>
              {name} - ID: {_id}
            </h1>
          </a>
        </div>
        {/* artist detail */}
        <center>
          <img src={img} alt='' style={{ width: '75%' }} />
        </center>
      </div>

      <h3>Artist's Pick</h3>
      <div className='grid-3'>
        <div className='card '>
          {singlesContext.singles[0] ? (
            <img
              src={singlesContext.singles[0].singleImg}
              alt=''
              style={{ width: '15%', height: '15%' }}
            />
          ) : null}
        </div>
        <div className='card'>
          {
            <h5>
              {singlesContext.singles[0]
                ? singlesContext.singles[0].title
                : null}
            </h5>
          }
        </div>
      </div>

      <h3>Albums</h3>
      {getAlbum()}

      <h3>Singles</h3>
      {getSingles()}

      <h3>Appears On</h3>
      {appearsOnAlbums()}
      {appearsOnSingles()}

      {/* <div className='all-center'>
        <a href={instagram}>IG</a>
        <a href={music_page_url}>SC</a>
      </div> */}
    </Fragment>
  );
};

export default ArtistOverview;
