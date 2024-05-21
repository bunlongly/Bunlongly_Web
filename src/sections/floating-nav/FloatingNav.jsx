import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import Nav from './Nav';
import './floating-nav.css';
import data from './data';

const FloatingNav = () => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    let ticking = false; // to use with requestAnimationFrame for performance

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY + 10 && currentScrollY > 100) {
            // Adding a buffer of 10px
            setNavVisible(false);
          } else if (currentScrollY < lastScrollY - 10 || currentScrollY < 10) {
            // Buffer for upward scrolls
            setNavVisible(true);
          }
          setLastScrollY(currentScrollY); // Update the last scroll position inside the animation frame
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <ul id='floating__nav' className={navVisible ? 'show' : 'hide'}>
      <Scrollspy
        items={['home', 'about', 'project', 'certificate', 'contact']}
        currentClassName='active'
        offset={-350}
        className='scrollspy'
      >
        {data.map(item => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
