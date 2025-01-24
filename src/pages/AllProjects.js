import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AllProjects.css';

const AllProjects = () => {
  const developmentProjects = [
    
    { id: 1, title: 'VR Escape Room', description: 'Using Unity to create a virtual escape room', image: '/images/EscapeRoom.png' },
    { id: 2, title: 'Mobile App Quiz', description: 'Using WebStorm and Android Studio to create a Mobile App Quiz', image: '/images/MobileAppQuiz.jpg' },
    { id: 3, title: 'Republic Polytechnic Web Portal', description: 'Using React to create a course enrolment portal for Republic Polytechnic', image: '/images/WebApp01.png' },
    {
      "id": 4,
      "title": "Disney Movies Mobile App",
      "description": "Using WebStorm and Android Studio to create a Disney movie list app with search and filter",
      "image": "/images/DisneyLists.jpg"
    }
    
  ];

  const designProjects = [
    {
      id: 5,
      title: 'BE-LEAF App UI Design',
      description: 'Using Figma to design a UI for the BE-Leaf app with recyclable identification, bin updates, and rewards.',
      image: 'images/BELEAF.png'
    },
    { id: 6, title: 'Portfolio Design', description: 'Using Adobe Illustrator to design namecards, stickers, and a portfolio website', image: '/images/PortfolioDesign.jpg' },
    {
      "id": 7,
      "title": "ChillSphere Mobile UI Design",
      "description": "Using Figma to design a UI for ChillSphere, an all in one entertainment app",
      "image": "images/ChillSphereApp.png"
    },
    { id: 8, title: 'Avatars Design', description: 'Using AI generative tools and Adobe Illustrator to design avatars and styles', image: '/images/Avatars.jpg' },
    
  ];

  const [devIndex, setDevIndex] = useState(0);
  const [designIndex, setDesignIndex] = useState(0);

  const projectsToShow = (projects, index) => projects.slice(index, index + 3);

  const handlePrev = (type) => {
    if (type === 'dev') setDevIndex((prev) => Math.max(prev - 1, 0));
    if (type === 'design') setDesignIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = (type, projectsLength) => {
    if (type === 'dev') setDevIndex((prev) => Math.min(prev + 1, projectsLength - 3));
    if (type === 'design') setDesignIndex((prev) => Math.min(prev + 1, projectsLength - 3));
  };

  return (
    <div className="all-projects-container">
      <h1 className="page-title">All Projects</h1>
      <p className="page-description">
        Explore a collection of diverse projects showcasing my skills in development and design.
      </p>

      {/* Development Projects */}
      <div className="projects-row">
        <h2 className="category-title">Development Projects</h2>
        <button className="nav-arrow left" onClick={() => handlePrev('dev')}>&lt;</button>
        <div className="projects-slider">
          <div className="projects-grid">
            {projectsToShow(developmentProjects, devIndex).map((project) => (
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
        <button className="nav-arrow right" onClick={() => handleNext('dev', developmentProjects.length)}>&gt;</button>
      </div>

      {/* Design Projects */}
      <div className="projects-row">
        <h2 className="category-title">Design Projects</h2>
        <button className="nav-arrow left" onClick={() => handlePrev('design')}>&lt;</button>
        <div className="projects-slider">
          <div className="projects-grid">
            {projectsToShow(designProjects, designIndex).map((project) => (
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
        <button className="nav-arrow right" onClick={() => handleNext('design', designProjects.length)}>&gt;</button>
      </div>
    </div>
  );
};

export default AllProjects;
