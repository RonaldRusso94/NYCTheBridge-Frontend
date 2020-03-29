import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SinglesContext from '../../context/singles/singlesContext';
import ArtistsContext from '../../context/artists/artistsContext';

const Single = ({ match }) => {
  const singlesContext = useContext(SinglesContext);
  const artistsContext = useContext(ArtistsContext);

  const { getSingle, single } = singlesContext;
  const { artist_name } = artistsContext.artists
  const { title, singleId, artistId = [], singleImg } = single;
  let artsitNameList = []

  useEffect(() => {
    getSingle(match.params.id);
  
    // eslint-disable-next-line
  }, []);

  //get artists from artistID
  const getArtistList = (commas) => {
    return artistId.map((singleIdNumber, index)=>{
      return artistsContext.artists.map(x=> {
        if (commas) {
          if (x.id == singleIdNumber) return x.artist_name + (index == artistId.length-1 ? '' : ', ')
        } else {
          if (x.id == singleIdNumber) return x.artist_name
        }
      })
    })
  }

  return (
    <Fragment>
      <Link to='/browse' className='btn btn-dark'>
        Back
      </Link>
      <div 
        className='card2 grid-1' 
        style={{'backgroundColor': '#1a1a1a', 'color': 'white',}}>
          <h1>
            {getArtistList(true).map(x=>x)} - {title}
          </h1>
      </div>
      <div className='card2 grid-5' style={{'paddingTop': '50px', 'textAlign':'center'}}>
        <h2>{title}</h2>
        <h3>On SoundCloud</h3>
        <div style={{'border': 'solid', 'overflow': 'hidden', 'height': '250px', 'textAlign':'center' }}>
          {/* image is single art, might need to be a different image because of the aspect ratio */}
          <img src = {singleImg} />
        </div>
        <div style={{'height': '100px', 'display': 'flex', 'alignItems': 'center', 'justifyContent':'center'}}>
          {/* src here needs to be connected to a 'artist social media' state */}
          <iframe allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fundefined&color=orange_white&size=56" style={{'width': '56px', 'height': '56px'}} />
        </div>
      </div>
      <div className='card2 grid-5' style={{'paddingTop': '50px'}}>
        <h1>Details:</h1>
        {getArtistList(false).map(artistName=>{
          return(
            <div style = {{'display': 'flex', 'justifyContent': 'space-between'}}>
              <div>
                <h2>{artistName}</h2>
              </div>
              <div style = {{'display': 'flex', 'justifyContent': 'space-around', 'width': '200px'}}>
                {/* The icons are pulled from a website, the links would need to be connected to a 'artist social media' state */}
                <a href='#'><img style = {{ 'width': '25px'}} src='https://image.flaticon.com/icons/svg/733/733646.svg'></img></a>
                <a href='#'><img style = {{ 'width': '25px'}} src='https://image.flaticon.com/icons/svg/733/733628.svg'></img></a>
                <a href='#'><img style = {{ 'width': '25px'}} src='https://image.flaticon.com/icons/svg/733/733614.svg'></img></a>
                <a href='#'><img style = {{ 'width': '25px'}} src='https://image.flaticon.com/icons/svg/733/733635.svg'></img></a>
                <a href='#'><img style = {{ 'width': '25px'}} src='https://image.flaticon.com/icons/svg/733/733605.svg'></img></a>
              </div>
            </div>
          )
        })}
      </div>
      <div className='card2 grid-5' style={{
        'paddingTop': '50px', 
        'height': '400px', 
        'marginBottom': '50px', 
        'display':'flex',
        'alignItems': 'center',
        'flexDirection': 'column'
      }}>
        <h1>What do you think?</h1>
        {/* The '30' here would be connected to a 'social state' */}
        <h2>30 responses</h2>
        <div style={{
        'display':'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'width': '300px',
        'cursor': 'pointer'
      }}>
          {/* onlick need to initiate a function that updates a 'community' backend */}
          <a onclick='' ><div >👍 Upvote</div></a>
          <a onclick='' ><div >😍 Love</div></a>
          <a onclick='' ><div >😲 Surprised</div></a>
        </div>
      </div>
    </Fragment>
  );
};

export default Single;
