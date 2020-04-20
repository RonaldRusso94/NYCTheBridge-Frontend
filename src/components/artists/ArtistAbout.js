import React, { useContext } from 'react';
import ArtistsContext from '../../context/artists/artistsContext';

export const ArtistAbout = (props) => {
  const artistsContext = useContext(ArtistsContext);
  return (
    <>
      <img
        className='all-center'
        src={artistsContext.artist.img}
        alt=''
        style={{ width: '30%' }}
      />
      <p className='py-3'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nisi
        illo, delectus quae ducimus odio incidunt. Quisquam asperiores nobis
        quasi veritatis? Ducimus nulla expedita maiores consectetur ratione
        asperiores doloremque exercitationem. Voluptatum consectetur quaerat
        unde id harum est eligendi vero fugiat dolor, magnam veniam doloribus
        illo sint velit incidunt maxime, perferendis voluptatem magni ipsa.
        Temporibus explicabo autem voluptatem repudiandae optio odit veniam
        fugit doloremque, sint voluptates harum id deserunt officiis architecto
        excepturi eligendi eius. Amet, dignissimos nam! Fugiat aliquam odio sit.
        Iure debitis magnam, animi id iusto consequatur perferendis doloribus
        adipisci quae placeat excepturi temporibus similique praesentium, esse
        suscipit. Quibusdam, atque.
      </p>
    </>
  );
};

export default ArtistAbout;
