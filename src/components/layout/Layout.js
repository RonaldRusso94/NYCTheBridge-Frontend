import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SideNav from './SideNav';

import ArtistsContext from '../../context/artists/artistsContext';
import AlbumContext from '../../context/albums/albumsContext';
import SinglesContext from '../../context/singles/singlesContext';
import albumsContext from '../../context/albums/albumsContext';

const Layout = ({ children }) => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  const artistsContext = useContext(ArtistsContext);
  const albumsContext = useContext(AlbumContext);
  const singlesContext = useContext(SinglesContext);

  const onClick = () => {
    setSearch(false);
  };

  if (search === false) {
    return (
      <>
        <Navbar text={text} setText={setText} setSearch={setSearch} />
        <div className='d-flex h-100'>
          <SideNav />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              marginTop: '4rem',
            }}
          >
            {children}
          </div>
        </div>
      </>
    );
  } else {
    if (searchResults === true) {
      return (
        <>
          <Navbar
            text={text}
            setText={setText}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
          />

          <div className='d-flex h-100'>
            <SideNav />

            {/* !!!!!! Link element does not work properly due to search removing all context from state */}

            <div className='container' style={{ paddingTop: '6rem' }}>
              <div className='all-center pb' style={{ width: '40%' }}>
                <a className='btn btn-dark all-center' href='/'>
                  Back To Home
                </a>
              </div>

              <h3 className='pb-1'>Top Result:</h3>
              {artistsContext.artists.length > 0 && (
                <h3 className='py'>Artist</h3>
              )}

              <div className='grid-5 py-1'>
                {artistsContext.artists.map(
                  (artist, index) => {
                    // if (index < 5) {
                    return (
                      <Link onClick={onClick} to={`/artist/${artist._id}`}>
                        <div className='image-cropper'>
                          <img
                            className='profile-pic'
                            src={artist.img}
                            alt=''
                          />
                        </div>

                        <p className='all-center py'> {artist.name} </p>
                      </Link>
                    );
                  }
                  // }
                )}
              </div>

              {albumsContext.albums.length > 0 && <h3>Albums</h3>}

              <div className='grid-2 py-1'>
                {albumsContext.albums.map((album) => {
                  return (
                    <div className='d-flex' style={{ alignItems: 'center' }}>
                      <div
                        style={{ width: '30%', fontSize: '0', lineHeight: '0' }}
                      >
                        <img src={album.img} alt='' />
                      </div>

                      <div style={{ width: '70%' }}>
                        <p className='px-1'> {album.title} </p>
                        <p className='px-1'>{album.artist}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {singlesContext.singles.length > 0 && <h3>Singles</h3>}

              <div className='grid-2 py-1'>
                {singlesContext.singles.map((single) => {
                  return (
                    <div className='d-flex' style={{ alignItems: 'center' }}>
                      <div style={{ width: '30%' }}>
                        <img src={single.img} alt='' />
                      </div>

                      <div style={{ width: '70%' }}>
                        <p className='px-1 small'> {single.title} </p>
                        <p className='px-1 small'>{single.artist}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* 
            <div
              className='container'
              style={{ paddingTop: '6rem', width: '70%' }}
            >
              <h1>Albums</h1>
              <div className='grid-3'></div>
            </div> */}
          </div>

          {/* <h1>Albums</h1>
          {albumContext.albums.map((album) => {
            return (
              <Link onClick={onClick} to={`/album/${album.albumId}`}>
                <p className='card'> {album.title} </p>
              </Link>
            );
          })}

          <h1>Singles</h1>
          {singlesContext.singles.map((single) => {
            return (
              <Link onClick={onClick} to={`/single/${single.singleId}`}>
                <p className='card'> {single.title} </p>
              </Link>
            );
          })} */}
        </>
      );
    } else {
      return (
        <>
          <Navbar
            text={text}
            setText={setText}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
          />
          <div className='py-3'>
            <h1 className='all-center py-3 my-3'>
              Search for an Artist/Song/Album
            </h1>
          </div>

          <div className='all-center' style={{ width: '40%' }}>
            <a className='btn btn-dark all-center' href='/'>
              Back To Home
            </a>
          </div>
        </>
      );
    }
  }
};
export default Layout;
