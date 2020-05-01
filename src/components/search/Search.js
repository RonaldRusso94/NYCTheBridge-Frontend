import React, { useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';
import SinglesContext from '../../context/singles/singlesContext';
import AlbumsContext from '../../context/albums/albumsContext';

import './Search.css';

import Artists from '../artists/Artist';

import SearchModal from '../search/SearchModal';

const Search = ({ setSearch, text, setText, setSearchResults }) => {
  const artistsContext = useContext(ArtistsContext);
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const onSubmit = async (e) => {
    if (text !== '') {
      e.preventDefault();

      artistsContext.searchArtists(text);
      albumsContext.searchAlbums(text);
      singlesContext.searchSingles(text);

      setSearchResults(true);
    }
  };

  const onFocus = (e) => {
    setSearch(true);
  };

  const onBlur = (e) => {
    setSearch(false);
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      {/* {console.log('FROM SEARCH', change)} */}
      {/* {console.log('FROM SEARCH', text)} */}

      <form
        onBlur={onBlur}
        onFocus={onFocus}
        onSubmit={onSubmit}
        className='form px-3 d-flex'
      >
        <input
          className='textbox-search'
          type='text'
          name='text'
          placeholder='Search Artists...'
          autoComplete='off'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-search'
        />
      </form>
      {/* {artistsContext.artists.length > 0 && (
        <button
          className='btn'
          style={{ background: '#d9d9d9' }}
          onClick={artistsContext.clearArtists}
        >
          Clear
        </button>
      )} */}
    </div>
  );
};

export default Search;
