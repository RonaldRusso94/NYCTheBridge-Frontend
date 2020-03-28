import React, { useReducer } from 'react';
import ArtistsContext from './artistsContext';
import ArtistsReducer from './artistsReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_ARTIST } from '../types';

const ArtistsState = props => {
  const initialState = {
    artists: [
      {
        id: '1',
        artist_name: 'Ray Flexie',
        music_page_url:
          'https://nycthebridge.com/Song_FlexieRay_DifferentPath.html',
        image_address:
          'https://nycthebridge.com/images/FlexieRay_DifferentPath.jpg'
      },
      {
        id: '2',
        artist_name: 'Jay Makk x Young Esco',
        music_page_url:
          'https://nycthebridge.com/Song_FlexieRay_DifferentPath.html',
        image_address:
          'https://nycthebridge.com/images/JayMakkxYoungEsco_Interlude.jpg'
      },
      {
        id: '3',
        artist_name: 'G-Whizz',
        music_page_url:
          'https://nycthebridge.com/Song_FlexieRay_DifferentPath.html',
        image_address:
          'https://nycthebridge.com/images/GWhizz_StickByMySide.jpg'
      }
    ],
    artist: {},
    loading: false
  };

  const [state, dispatch] = useReducer(ArtistsReducer, initialState);

  // Search Users **FIX
  const searchUsers = async text => {
    setLoading();

    const filtered = state.artists.filter(artist => {
      return artist.artist_name.indexOf(text) !== -1;
    });

    dispatch({
      type: SEARCH_USERS,
      payload: filtered
    });
  };

  // Clear users from state
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Get a single artist
  const getArtist = async id => {
    setLoading();
    const artist = state.artists.find(artist => artist.id === id);

    dispatch({
      type: GET_ARTIST,
      payload: artist
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ArtistsContext.Provider
      value={{
        artists: state.artists,
        artist: state.artist,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getArtist
      }}
    >
      {props.children}
    </ArtistsContext.Provider>
  );
};

export default ArtistsState;
