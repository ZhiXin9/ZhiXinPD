import React from 'react';
import { Link } from 'react-router-dom';
import './AllProjects.css';

const AllProjects = () => {
  const projects = [
    { id: 1, title: 'VR Escape Room', description: 'Using Unity to create a virtual escape room', image: '/images/EscapeRoom.png' },
    { id: 2, title: 'Mobile App Quiz', description: 'Using WebStorm and Android Studio to create a Mobile App Quiz', image: '/images/MobileAppQuiz.jpg' },
    { id: 3, title: 'Portfolio Design', description: 'Using Adobe Illustrator to design namecards, stickers, and a portfolio website', image: '/images/PortfolioDesign.jpg' },
    { id: 4, title: 'Avatars Design', description: 'Using AI generative tools and Adobe Illustrator to design avatars and styles', image: '/images/Avatars.jpg' },
  ];

  return (
    <div className="all-projects-container">
      <h1 className="page-title">All Projects</h1>
      <p className="page-description">
        Explore a collection of diverse projects showcasing skills in virtual reality, mobile app development, and design.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <Link to={`/project/${project.id}`} className="view-project-btn">View Project</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
