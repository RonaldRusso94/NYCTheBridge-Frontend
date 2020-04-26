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

  const { albums } = albumsContext;
  const { _id, name, img } = artist;

  const { singles } = singlesContext;

  useEffect(() => {
    getArtist(props.params);
    // eslint-disable-next-line
  }, []);

  // Get artist albums
  const artistAlbums = albums.filter((album) => {
    if (album.artist === props.params) {
      return true;
    }
  });

  const artistSingles = singles.filter((single) => {
    if (single.artist === props.params) {
      return true;
    }
  });

  const appearsOnAlbums = () => {
    // Searchs Albums
    return albumsContext.albums.map((album) => {
      return album.features.map((feature) => {
        if (feature === props.params) {
          return (
            <div className='card'>
              <img
                src={album.img}
                alt=''
                style={{ height: '10%', width: '10%' }}
              />
              <h5>
                {album.title} - {album.artist}
              </h5>
            </div>
          );
        }
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
                src={single.img}
                alt=''
                style={{ height: '10%', width: '10%' }}
              />
              <h5>
                {single.title} - {single.artist}
              </h5>
            </div>
          );
        }
      });
    });
  };

  // if (loading) return <Spinner />;

  return (
    <Fragment>
      <div className='py-1'>
        <Link to='/' className='btn btn-dark'>
          Back
        </Link>
      </div>

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

      {/* Display artist albums */}
      {artistAlbums.length > 0 ? <h3>Albums</h3> : null}
      {artistAlbums.length > 0 &&
        artistAlbums.map((album) => {
          return (
            <div className='card' key={album._id}>
              <h4>{album.title}</h4>
              <h5>AID: {album._id}</h5>
              <img
                src={album.img}
                alt=''
                style={{ height: '10%', width: '10%' }}
              />

              {album.songs.map((song) => {
                return (
                  <p key={song._id} style={{ fontSize: '.7rem' }}>
                    {song.songtitle} - Song ID: {song._id}
                  </p>
                );
              })}
            </div>
          );
        })}

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

      {/* {appearsOnAlbums()}
      {appearsOnSingles()} */}

      {/* Needs fix */}
      {albumsContext.albums.map((album) => {
        if (album.features.includes(props.params)) {
          return <h3>Appears On</h3>;
        }
      }) ||
        singlesContext.singles.map((single) => {
          if (single.features.includes(props.params)) {
            return <h3>Appears On</h3>;
          }
        })}

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
