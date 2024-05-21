import React, { useState, useEffect } from 'react';
import './header.css';
import TypeWriter from '../../components/TypeWriter';

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [navbarClass, setNavbarClass] = useState('hide');

  const handleScrollLink = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setNavbarClass('transparent');
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarClass('show'); // Make the navbar visible with less transparency
      } else if (currentScrollY <= 100) {
        setNavbarClass('hide'); // Hide the navbar when at the top of the page
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className='header-container' id='home'>
      <div className='container'>
        <div className={`main-nav navbar ${navbarClass}`}>
          <div className='logo'>
            <img src='/assets/Logo/bunlong-logo.png' alt='logo' />
          </div>
          <ul className='right'>
            <li><a href='#home' onClick={handleScrollLink}>Home</a></li>
            <li><a href='#about' onClick={handleScrollLink}>About</a></li>
            <li><a href='#project' onClick={handleScrollLink}>Project</a></li>
            <li><a href='#certificate' onClick={handleScrollLink}>Certificate</a></li>
            <li><a href='#contact' onClick={handleScrollLink}>Contact</a></li>
          </ul>
        </div>
        <div className='header-content'>
          <div className='img-content'>
            <img src='/assets/Logo/Photo.PNG' alt='Profile' />
          </div>
          <div className='content'>
            <h1 className='TypeWriter'>
              Hello, I'm <span>Bunlong Ly</span>
            </h1>
            <TypeWriter words={['FullStack Web Developer']} wait={3000} />
            <a href='#about' className='about btn' onClick={handleScrollLink}>
              More About Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
