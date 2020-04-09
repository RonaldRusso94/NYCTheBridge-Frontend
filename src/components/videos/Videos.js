import React, { useContext } from 'react';
import VideoItemAlbum from './VideoItemAlbum';
import VideoItemSingle from './VideoItemSingle';
import Spinner from '../layout/Spinner';
//getting both for the moment just in case
import AlbumsContext from '../../context/albums/albumsContext';
import SinglesContext from '../../context/singles/singlesContext';

const Videos = () => {
  const singlesContext = useContext(SinglesContext);
  const albumsContext = useContext(AlbumsContext);

  const { singles } = singlesContext;
  const { albums } = albumsContext;

  return (
    <div style={videoStyle}>
      {/* runs through all singles and creates a component for each one */}
      {singles &&
        singles.map(
          (single) =>
            single.musicVideo && (
              <VideoItemSingle
                key={`singleVideo${single.singleId}`}
                single={single}
                type={'single'}
              />
            )
        )}
      {/* runs through all albums and then maps though each album song array and creates a component for each one */}
      {albums &&
        albums.map((album) =>
          album.songs.map(
            (song, index) =>
              song.musicVideo && (
                <VideoItemAlbum
                  key={`albumVideo${album.albumId}song${index}`}
                  album={album}
                  type={'album'}
                />
              )
          )
        )}
    </div>
  );
};

const videoStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Videos;
