import React, { useState, useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';
import SearchModal from '../search/SearchModal';
import SearchState from '../search/SearchState';

const Search = () => {
  const artistsContext = useContext(ArtistsContext);

  const [text, setText] = useState('');
  const [search, setSearch] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    artistsContext.searchArtists(text);
    setText('');
  };

  // const onClick = e => {
  //   setSearch(true);
  // };

  const onChange = e => setText(e.target.value);

  // if (search === true) {
  //   return <SearchModal />;
  // }

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Artists...'
          value={text}
          onChange={onChange}
          // onClick={onClick}
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
