import React, { useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';
import SearchModal from '../search/SearchModal';
import SearchState from '../search/SearchState';

const Search = ({ setSearch, text, setText }) => {
  const artistsContext = useContext(ArtistsContext);

  const onSubmit = e => {
    e.preventDefault();
    artistsContext.searchArtists(text);
    setText = '';
  };

  const onClick = e => {
    setSearch(true);
  };

  // if (search === true) {
  //   return <SearchModal />;
  // }

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
