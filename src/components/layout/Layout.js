import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SideNav from './SideNav';

import ArtistsContext from '../../context/artists/artistsContext';
import AlbumContext from '../../context/albums/albumsContext';
import SinglesContext from '../../context/singles/singlesContext';
import albumsContext from '../../context/albums/albumsContext';

import Search from '../search/Search.js';

import '../search/Search.css';

const Layout = ({ children }) => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  const artistsContext = useContext(ArtistsContext);
  const albumsContext = useContext(AlbumContext);
  const singlesContext = useContext(SinglesContext);

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
              marginTop: '3.1rem',
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

          <div className='mobile-searchbar' style={{ paddingTop: '5rem' }}>
            <Search
              text={text}
              setText={setText}
              setSearch={setSearch}
              setSearchResults={setSearchResults}
            />
          </div>

          <div className='d-flex h-100'>
            <SideNav />

            <div className='container' style={{ paddingTop: '3rem' }}>
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
                      <div key={artistsContext.artist._id}>
                        <Link
                          to={`/artist/${artist._id}`}
                          onMouseDown={() =>
                            (window.location = `/artist/${artist._id}`)
                          }
                        >
                          <div className='image-cropper'>
                            <img
                              className='profile-pic'
                              src={artist.img}
                              alt=''
                            />
                          </div>
                        </Link>
                        <p className='all-center py'> {artist.name} </p>
                      </div>
                    );
                  }
                  // }
                )}
              </div>

              {albumsContext.albums.length > 0 && <h3>Albums</h3>}

              <div className='grid-2 py-1'>
                {albumsContext.albums.map((album) => {
                  return (
                    <Link
                      key={albumsContext.album._id}
                      to={`/album/${album._id}`}
                      onMouseDown={() =>
                        (window.location = `/album/${album._id}`)
                      }
                    >
                      <div className='d-flex' style={{ alignItems: 'center' }}>
                        <div
                          style={{
                            width: '40%',
                            fontSize: '0',
                            lineHeight: '0',
                          }}
                        >
                          <img src={album.img} alt='' />
                        </div>

                        <div style={{ width: '60%' }}>
                          <p className='px-1'> {album.title} </p>
                          <p className='px-1'>{album.artist}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {singlesContext.singles.length > 0 && <h3>Singles</h3>}

              <div className='grid-2 py-1'>
                {singlesContext.singles.map((single) => {
                  return (
                    <Link
                      key={singlesContext.single._id}
                      to={`/single/${single._id}`}
                      onMouseDown={() =>
                        (window.location = `/single/${single._id}`)
                      }
                    >
                      <div className='d-flex' style={{ alignItems: 'center' }}>
                        <div style={{ width: '40%' }}>
                          <img src={single.img} alt='' />
                        </div>

                        <div style={{ width: '60%' }}>
                          <p className='px-1'> {single.title} </p>
                          <p className='px-1'>{single.artist}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
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

          <div className='mobile-searchbar' style={{ paddingTop: '5rem' }}>
            <Search
              text={text}
              setText={setText}
              setSearch={setSearch}
              setSearchResults={setSearchResults}
            />
          </div>

          <div className='py-3'>
            <h1 className='all-center my-2'>Search for an Artist/Song/Album</h1>
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
