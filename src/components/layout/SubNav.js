import React, { useState } from 'react';
import Users from '../users/Users';
import Albums from '../albums/Albums';
import Singles from '../singles/Singles';
import Genres from '../genres/Genres';

const SubNav = () => {
  const [nav, setNav] = useState('genres');

  const onClick = e => {
    setNav(e.target.name);
  };

  const navitems = ['genres', 'artists', 'albums', 'singles', 'videos'];

  const subnav = (
    <ul>
      {navitems.map(item => {
        return (
          <li className='px-1' style={{ display: 'inline' }}>
            <a name={item} onClick={onClick}>
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );

  if (nav === 'genres') {
    return (
      <>
        {subnav}
        <h3>Genres</h3>
        <Genres />
      </>
    );
  } else if (nav === 'artists') {
    return (
      <>
        {subnav}
        <h3>Artists</h3>
        <Users />
      </>
    );
  } else if (nav === 'albums') {
    return (
      <>
        {subnav}
        <h3>Albums</h3>
        <Albums />
      </>
    );
  } else if (nav === 'singles') {
    return (
      <>
        {subnav}
        <h3>Singles</h3>
        <Singles />
      </>
    );
  } else if (nav === 'videos') {
    return (
      <>
        {subnav}
        <h3>Videos</h3>
        <Users />
      </>
    );
  }

  // const navList = () => {
  //   return navitems.map(item => {
  //     return (
  //       <li className='px-1' style={{ display: 'inline' }}>
  //         <a name={item} onClick={onClick}>
  //           {item}
  //         </a>
  //       </li>
  //     );
  //   });
  // };

  // return <ul>{navList}</ul>;

  // const subnav = (
  //   <ul className='py-1'>
  //     <li className='px-1' style={{ display: 'inline' }}>
  //       <a name='genres' onClick={onClick}>
  //         Genres
  //       </a>
  //     </li>
  //     <li className='px-1' style={{ display: 'inline' }}>
  //       <a name='artists' onClick={onClick}>
  //         Artists
  //       </a>
  //     </li>
  //     <li className='px-1' style={{ display: 'inline' }}>
  //       <a name='albums' onClick={onClick}>
  //         Albums
  //       </a>
  //     </li>
  //     <li className='px-1' style={{ display: 'inline' }}>
  //       <a name='singles' onClick={onClick}>
  //         Singles
  //       </a>
  //     </li>
  //     <li className='px-1' style={{ display: 'inline' }}>
  //       <a name='videos' onClick={onClick}>
  //         Videos
  //       </a>
  //     </li>
  //   </ul>
  // );
  // if (nav === 'genres') {
  //   return (
  //     <>
  //       {subnav}
  //       <h3>Genres</h3>
  //       <Users />
  //     </>
  //   );
  // } else if (nav === 'artists') {
  //   return (
  //     <>
  //       {subnav}
  //       <h3>Artists</h3>
  //       <Users />
  //     </>
  //   );
  // } else if (nav === 'albums') {
  //   return (
  //     <>
  //       {subnav}
  //       <h3>Albums</h3>
  //       <Albums />
  //     </>
  //   );
  // } else if (nav === 'singles') {
  //   return (
  //     <>
  //       {subnav}
  //       <h3>Singles</h3>
  //       <Singles />
  //     </>
  //   );
  // } else if (nav === 'videos') {
  //   return (
  //     <>

  //       {subnav}
  //       <h3>Videos</h3>
  //       <Users />
  //     </>
  //   );
  // }

  // return <></>;
};

export default SubNav;
