import React, { useEffect, useState } from 'react';

const SideNav = () => {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const renderSideNav = _ => {
      const scroll = window.scrollY;
      console.log(scroll);
      if (scroll > 99) {
        setPassed(true);
        return 'sidebar-fixed';
      }
      setPassed(false);
      return 'sidebar-absolute';
    };
    window.addEventListener('scroll', renderSideNav);
  });
  return (
    <div className='wrapper'>
      <div
        className={`sidebar ${passed ? 'sidebar-fixed' : 'sidebar-absolute'}`}
      >
        <ul>
          <h3>Siderbar</h3>
          <li>
            <a href='#'>aaa</a>
          </li>
          <li>
            <a href='#'>aaa</a>
          </li>
          <li>
            <a href='#'>aaa</a>
          </li>
          <li>
            <a href='#'>aaa</a>
          </li>
          <li>
            <a href='#'>aaa</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
