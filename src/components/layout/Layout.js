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
        <div>
          <Navbar
            text={text}
            setText={setText}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
          />

          {/* !!!!!! Link element does not work properly due to search removing all context from state */}

          <h1>Artist</h1>
          {/*  {if(artistsContext.artists.length==0)return <h2>No results</h2>}  */}
          {artistsContext.artists.map((artist) => {
            return (
              <Link onClick={onClick} to={`/artist/${artist.id}`}>
                <p className='card'> {artist.artist_name} </p>;
              </Link>
            );
          })}
          <h1>Albums</h1>
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
          })}
        </div>
      );
    } else {
      return (
        <div>
          <Navbar
            text={text}
            setText={setText}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
          />
          <h1 className='all-center py-3 my-3'>
            Search for an Artist/Song/Album
          </h1>

          <div className='all-center' style={{ width: '40%' }}>
            <a className='btn btn-dark all-center' href='/'>
              Back To Home
            </a>
          </div>
        </div>
      );
    }
  }
};
export default Layout;
