import React from 'react';
import Search from '../search/Search';

const SearchState = props => {
  return (
    <div>
      {console.log('Artists From SearchState', props.artists)}
      {console.log('Singles From SearchState', props.singles)}

      <Search />
    </div>
  );
};

export default SearchState;
