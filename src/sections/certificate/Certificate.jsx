import React from 'react';
import './certificate.css';
import { certificatesData } from './data'; 

const Certificate = () => {
  const cert = certificatesData[0];

  return (
    <div className='certificate-page' id='certificate'>
      <h1>
        <span>Certificate</span>
      </h1>
      <h2>{cert.title}</h2>
      <p className='desc'>{cert.description}</p>
      <div className='certificate-details'>
        <img src={cert.image} alt={cert.title} className='certificate-image' />
        <div className='youtube-links'>
          {cert.youtubeLinks.map((link, idx) => (
            <div key={idx} className='youtube-link-item'>
              <div className='link-title'>{link.title}:</div>
              <div className='link-url'>
                <a href={link.url} target='_blank' rel='noopener noreferrer'>
                  {link.url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
