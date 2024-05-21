import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div class='container'>
        <h1>
          <span>Contact</span>
        </h1>
        <div class='contact-info'>
          <div class='item'>
            <span>
              <i class='fas fa-envelope fa-2x'> </i>
              <h3>bunlongly03@gmail.com</h3>
            </span>
          </div>
          <div class='item'>
            <a href='https://www.linkedin.com/in/bunlong-ly-3a72b2265/'>
              <span>
                <i class='fa-brands fa-linkedin-in fa-2x'></i>
              </span>
              <h3>Linkedin</h3>
            </a>
          </div>
          <div class='item'>
            <a href='https://github.com/bunlongly'>
              <span>
                <i class='fa-brands fa-github fa-2x'></i>
              </span>
              <h3>github</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
