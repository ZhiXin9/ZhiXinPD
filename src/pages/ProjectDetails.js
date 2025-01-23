import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    { id: 1, title: 'VR Escape Room', category: 'Virtual Reality (VR) Development', description: 'Create an immersive virtual escape room using Unity, featuring interactive puzzles and a rich storyline.', image: '/images/EscapeRoom.png' },
    { id: 2, title: 'Mobile App Quiz', category: 'Mobile App Development', description: 'Develop a mobile quiz app using WebStorm and Android Studio with intuitive design and analytics.', image: '/images/MobileAppQuiz.jpg' },
    { id: 3, title: 'Portfolio Design', category: 'Graphic Design', description: 'Design a portfolio using Adobe Illustrator with modern aesthetics for namecards, stickers, and a web presence.', image: '/images/PortfolioDesign.jpg' },
    { id: 4, title: 'Avatars Design', category: 'Graphic Design', description: 'Create unique avatars and character designs using AI generative tools and Adobe Illustrator.', image: '/images/Avatars.jpg' },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  return (
    <div className="project-details-container">
      {project ? (
        <div className="project-details-content">
          <div className="project-image-section">
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
          <div className="project-info-section">
            <h1 className="project-title">{project.title}</h1>
            <h3 className="project-category">{project.category}</h3>
            <p className="project-description">{project.description}</p>
            <button className="back-button" onClick={() => window.history.back()}>
              Back to Projects
            </button>
          </div>
        </div>
      ) : (
        <p className="project-not-found">Project not found.</p>
      )}
    </div>
  );
};

export default ProjectDetails;
