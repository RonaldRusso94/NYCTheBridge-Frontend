import React, { useContext } from 'react';
import ArtistItem from './ArtistItem';
import Spinner from '../layout/Spinner';
import ArtistsContext from '../../context/artists/artistsContext';

const Artists = () => {
  const artistsContext = useContext(ArtistsContext);

  const { loading, artists } = artistsContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div style={artistStyle}>
          {artists.map(artist => (
            <ArtistItem key={artist.id} artist={artist} />
          ))}
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam
        alias dolor, aspernatur ducimus nulla provident quod iste sit distinctio
        odit expedita dignissimos reiciendis voluptates obcaecati delectus ab.
        Magni quidem debitis omnis architecto ea maiores minima expedita? Hic
        vero temporibus possimus deleniti porro aliquam atque beatae et eos
        aperiam iusto mollitia cumque voluptates vel tempore eius sed,
        consequuntur vitae nisi quaerat omnis adipisci, sapiente assumenda cum.
        Omnis nostrum, ipsam possimus ullam distinctio deleniti quo voluptatum
        quae mollitia maxime exercitationem soluta dolores, minima quisquam
        perferendis modi alias officiis iure. Vitae quia quas iusto, ipsa error
        incidunt voluptas voluptates sint dolore consequatur? Optio accusantium
        quos impedit aperiam quia provident sequi officiis, quod vitae rerum!
        Repellendus beatae alias non sit sapiente dignissimos, voluptatum
        dolorem cumque asperiores molestiae quaerat tenetur necessitatibus a
        officiis harum eius mollitia tempora unde fuga. Error eos ab nisi
        molestiae recusandae quidem provident, quia aspernatur veritatis cumque
        quibusdam nihil facilis, eum obcaecati aliquid nostrum dolor dolorum
        facere laboriosam velit. Nihil corporis doloremque commodi eveniet
        asperiores nam dicta placeat est, unde, libero inventore rem maiores
        minima minus ut tempore eum pariatur, provident ad voluptatem at? Labore
        exercitationem sunt error tempore necessitatibus, nemo at repudiandae
        molestias quia obcaecati culpa nostrum quibusdam rerum.
      </>
    );
  }
};

const artistStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Artists;
