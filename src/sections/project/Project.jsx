import React, { useState, useEffect, useRef } from 'react';
import './project.css';
import { projectsData } from './data'; // Make sure the path is correct


const Project = ({ projectId = 'proshop' }) => {
  // Defaulting to 'proshop' if no ID is passed
  const [project, setProject] = useState(null);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const selectedProject = projectsData.find(p => p.id === projectId);
    setProject(selectedProject);
  }, [projectId]);

  useEffect(() => {
    if (!project) return;

    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex(prevIndex =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [project, index]);

  if (!project) return null; // Or you could return a loading spinner or a similar indicator

  return (
    <div className='project' id='project'>
      <h1><span>Project</span></h1>
      <div className='project-details'>
        <h1><span>{project.title}</span></h1>
        <p className='desc'>{project.description}</p>
        <div className='project-technologies'>
          <strong>Technologies used:</strong> {project.technologies}
        </div>
        <div className='project-link'>
          <strong>Link : </strong>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            {project.link}
          </a>
          
        </div>
      </div>
      <div
        className='image-container'
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {project.images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
      <div className='buttons-container'>
        <button
          onClick={() =>
            setIndex(
              (index - 1 + project.images.length) % project.images.length
            )
          }
          className='btn'
        >
          Prev
        </button>

        <button
          onClick={() => setIndex((index + 1) % project.images.length)}
          className='btn'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Project;
