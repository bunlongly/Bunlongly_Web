import React from 'react';
import './design.css';
import { designData } from './data'; // Ensure the path is correct

const Design = () => {
  const project = designData.find(p => p.id === 'design');

  if (!project) return null; // Or you could return a loading spinner or a similar indicator

  return (
    <div className='design-page'>
      <div className='design-card'>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img
          src={project.images[0].src}
          alt={project.images[0].alt}
          className='design-image'
        />

        <button className='btn'>
          <a
            href={project.download}
            target='_blank'
            rel='noopener noreferrer'
            className='download-link'
          >
            Download PDF
          </a>
        </button>
      </div>
    </div>
  );
};

export default Design;
