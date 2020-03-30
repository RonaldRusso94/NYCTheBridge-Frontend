import React, { useReducer } from 'react';
import AlbumsContext from './albumsContext';
import AlbumsReducer from './albumsReducer';
import { GET_ALBUM, SEARCH_ALBUMS } from '../types';

const AlbumsState = props => {
  const initialState = {
    albums: [
      {
        albumId: '1',
        artistId: ['1'],
        albumImg:
          'https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg',
        title: 'Different Path Album',
        songs: [
          {
            songtitle: 'Different Path',
            artistsId: ['1'],
            features: [],
            genre: ['classic', 'pop'],
            musicVideo: true,
            musicUrl: ''
          },
          {
            songtitle: 'Different Path 2',
            artistsId: ['1', '3'],
            features: [],
            genre: ['trap', 'drill'],
            musicVideo: true,
            musicUrl: ''
          }
        ]
      },
      {
        albumId: '2',
        artistId: ['1'],
        albumImg:
          'https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg',
        title: 'Stick By My Side Album',
        songs: [
          {
            songtitle: 'Stick By My Side',
            artistsId: ['3'],
            features: ['1'],
            genre: ['classic', 'rb'],
            musicVideo: true,
            musicUrl: ''
          },
          {
            songtitle: 'Stick By My Side 2',
            artistsId: ['3', '1'],
            features: ['3'],
            genre: ['r&b', 'pop'],
            musicVideo: false,
            musicUrl: ''
          }
        ]
      }
    ],
    album: {}
  };

  const [state, dispatch] = useReducer(AlbumsReducer, initialState);

  // Get a single album
  const getAlbum = async id => {
    const album = state.albums.find(album => album.albumId === id);

    console.log('from dispatch getAlbum', album);

    dispatch({
      type: GET_ALBUM,
      payload: album
    });
  };

  // Search Albums **FIX
  const searchAlbums = async text => {
    const filtered = state.albums.filter(album => {
      return album.title.indexOf(text) !== -1;
    });
    dispatch({
      type: SEARCH_ALBUMS,
      payload: filtered
    });
  };

  return (
    <AlbumsContext.Provider
      value={{
        albums: state.albums,
        album: state.album,
        getAlbum,
        searchAlbums
      }}
    >
      {props.children}
    </AlbumsContext.Provider>
  );
};

export default AlbumsState;
