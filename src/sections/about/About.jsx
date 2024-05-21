import React, { useEffect, useRef } from 'react';
import './about.css';
import { timelineData } from './data'; // Adjust the path as necessary

const About = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      timelineRefs.current.forEach(item => {
        if (item && isInViewport(item)) {
          item.classList.add('show');
        }
      });
    };

    const isInViewport = el => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='about'>
      <div className='container about'>
        <h1 id='about'>
          <span className='text-about'> About Me </span>
        </h1>
        <h1>
          <span> I'm Bunlong Ly </span>
          and I<span> specialize </span>
          in <span>Web Development</span>
        </h1>
      </div>

      <div className='about-lead'>
        <p className='more-font'>
          Interested in web development, with expertise ranging from frontend
          to backend across various programming languages in real-world
          projects. An enthusiastic, hardworking individual with innovative
          problem-solving skills, strong research capabilities, and a keen
          desire to continually learn and grow.
        </p>
        {/* <p>
          <span> From : </span>
          Limkokwing University of Creative Technology.
        </p>
        <p>
          <span> Major : </span>
          Software Engineering.
        </p> */}
      </div>

      <section id='timeline'>
        <ul>
          {timelineData.map((item, index) => (
            <li key={index} ref={el => (timelineRefs.current[index] = el)}>
              <div>
                <h3>
                  <i className='fas fa-chevron-right'></i>
                  <span> {item.year} :</span>
                </h3>
                <p className='desc'>{item.description}</p>
                {item.detail && <p>{item.detail}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
