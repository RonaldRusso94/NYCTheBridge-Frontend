import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SideNav from './SideNav';

import ArtistsContext from '../../context/artists/artistsContext';
import AlbumContext from '../../context/albums/albumsContext';
import SinglesContext from '../../context/singles/singlesContext';

const Layout = ({ children }) => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  const artistsContext = useContext(ArtistsContext);
  const albumContext = useContext(AlbumContext);
  const singlesContext = useContext(SinglesContext);

  const { artists } = artistsContext;

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

            <div
              className='container'
              style={{ paddingTop: '6rem', width: '70%' }}
            >
              <div className='all-center' style={{ width: '40%' }}>
                <a className='btn btn-dark all-center' href='/'>
                  Back To Home
                </a>
              </div>
              
              <h3>Top Result</h3>
              <h1>Artist</h1>
              <div className='grid-3'>
                {artistsContext.artists.map((artist) => {
                  return (
                    <Link onClick={onClick} to={`/artist/${artist.id}`}>
                      <img src={artist.img} alt='' />
                      <p className='card'> {artist.name} </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {console.log('SEARCH TEST', artists)}

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
