import React, { useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';
import SinglesContext from '../../context/singles/singlesContext';
import AlbumsContext from '../../context/albums/albumsContext';

import Artists from '../artists/Artist';

import SearchModal from '../search/SearchModal';

const Search = ({ setSearch, text, setText, setSearchResults }) => {
  const artistsContext = useContext(ArtistsContext);
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const onSubmit = async e => {
    e.preventDefault();

    singlesContext.searchSingles(text);
    artistsContext.searchArtists(text);
    albumsContext.searchAlbums(text);

    setSearchResults(true);
  };

  const onClick = e => {
    setSearch(true);
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      {/* {console.log('FROM SEARCH', change)} */}
      {/* {console.log('FROM SEARCH', text)} */}

      <form onSubmit={onSubmit} className='form' style={{ display: 'inline' }}>
        <input
          type='text'
          name='text'
          placeholder='Search Artists...'
          value={text}
          onChange={onChange}
          onClick={onClick}
          style={{ width: '50%', display: 'inline' }}
        />
        <input type='submit' value='Search' className='btn btn-dark' />
      </form>
      {artistsContext.artists.length > 0 && (
        <button
          className='btn'
          style={{ background: '#d9d9d9' }}
          onClick={artistsContext.clearArtists}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
