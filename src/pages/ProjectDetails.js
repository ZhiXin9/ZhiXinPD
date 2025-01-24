import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
       
    
    {
      id: 1,
      title: 'VR Escape Room',
      category: 'Virtual Reality (VR) Development',
      techUsed: ['Unity', 'C#', 'VR SDK'],
      yearPublished: 2023,
      colorScheme: 'Dark, Blue',
      description:
        'Create an immersive virtual escape room using Unity, featuring interactive puzzles and a rich storyline.',
      detailedDescription:
        `In this project, I developed a fully immersive VR escape room game using Unity and C#. 
        The game was designed to offer an engaging experience, where players could solve various puzzles and interact with the virtual environment. 
        I integrated a VR SDK to enhance the player's interaction with the virtual world, adding an extra layer of realism.
        
        Some challenges I faced included optimizing the game for smooth performance on VR devices and ensuring interactive elements were intuitive and responsive.
        This project gave me hands-on experience in VR development, real-time rendering, and creating engaging user interactions in a virtual space.
        
        **Skills Learned:** VR development, optimization techniques, game logic, real-time interaction.`,
      image: '/images/EscapeRoom.png',
      videoLink: 'https://youtu.be/uQwUrBfHIXo',
    },
    {
      id: 2,
      title: 'Mobile App Quiz',
      category: 'Mobile App Development',
      techUsed: ['WebStorm', 'Android Studio'],
      yearPublished: 2022,
      colorScheme: 'Blue, White',
      description:
        'Develop a mobile quiz app using WebStorm and Android Studio with intuitive design and analytics.',
      detailedDescription:
        `This mobile app was designed to allow users to take quizzes on various topics, with a user-friendly interface built using Android Studio.
        The app stores quiz questions and tracks user progress with analytics features powered by Firebase. 
        The project focused on creating a seamless user experience, where users could easily navigate through quizzes and view their results in real-time.
        
        One challenge in this project was integrating Firebase for user authentication and data storage, ensuring secure data handling.
        Additionally, optimizing the app for smooth performance on various Android devices was crucial for a positive user experience.

        **Skills Learned:** Mobile app development, Firebase integration, UI/UX design for mobile, analytics tracking.`,
      image: '/images/MobileAppQuiz.jpg',
      repoLink: 'https://github.com/ZhiXin9/C346_L3_Exercise',
      videoLink: 'https://youtu.be/efdHCyEUKX4',
    },
    {
      "id": 3,
      "title": "Republic Polytechnic Web Portal",
      "category": "Web Development",
      "techUsed": ["React", "HTML", "CSS"],
      "yearPublished": 2025,
      "colorScheme": "Green, White",
      "description": "A web app designed to help users explore and register for various diplomas and courses offered by the School of Infocomm at Republic Polytechnic.",
      "detailedDescription": 
        "For the Republic Polytechnic Course Enrolment Portal, I designed a user-friendly web application where students can explore available diplomas, learn about specific courses, and register their interest. The portal features a clean and easy-to-navigate interface, with detailed course descriptions and a smooth registration process. **Challenges:** Balancing the large amount of course data with a simple user interface was challenging. Ensuring that users could quickly find relevant courses while keeping the site responsive across devices required careful design choices. I also had to ensure the site was accessible, providing clear contrast and legible text for all users. Integrating the search functionality and ensuring it provided accurate, filtered results added complexity to the project. **Skills Learned:** React development, UI/UX design, accessibility best practices, responsive design, and user interface navigation.",
      "image": "/images/WebApp01.png",
      "repoLink": "https://c219-l09-bwog1ar2i-zhixin9s-projects.vercel.app",
      
    },
    {
      "id": 4,
      "title": "Disney Movies Mobile App",
      "category": "Mobile App Development",
      "techUsed": ["WebStorm", "Android Studio"],
      "yearPublished": 2023,
      "colorScheme": "Red, Yellow, Blue",
      "description": "Develop a mobile app listing Disney movies with search and filter functionality using WebStorm and Android Studio.",
      "detailedDescription":
        `This Disney Movies mobile app allows users to explore a variety of Disney movies, complete with detailed information and search functionality. Built using WebStorm and Android Studio, the app enables users to filter movies by category, year, and rating for a personalized experience.
        
        **Challenges:** Integrating an efficient movie search and filter system that provides quick results. Optimizing the app for various screen sizes and ensuring smooth navigation through a large database of movies. Ensuring the app loads content quickly and handles user interactions seamlessly.
        
        **Skills Learned:** Mobile app development, search and filter functionality, UI/UX design for mobile, database management, performance optimization.`,
      "image": "/images/mobile_L10.jpg",
      "repoLink": "https://github.com/ZhiXin9/C346_L10_Submission",
      "videoLink": "https://youtu.be/NxtQILURMd4"
    },
    
    { 
      id: 5,
      title: 'BE-Leaf App UI Design',
      category: 'UI/UX Design',
      techUsed: ['Figma', 'AI Tools'],
      yearPublished: 2025,
      colorScheme: 'Green, Earth Tones',
      description:
        'Design the user interface for an app that helps users identify recyclables, provides bin capacity updates, and rewards them for recycling efforts.',
      detailedDescription:
        `For the BE-Leaf app UI design, I created a seamless, eco-friendly experience that integrates AI recognition for recyclables, real-time bin updates, and a rewards system. Using Figma, I focused on wireframes and prototypes to ensure a clean design with green and earth tones that promote sustainability. 
    
        **Challenges:** 
        Integrating AI functionality was challenging as I needed to make object identification intuitive and trustworthy without overwhelming users. The real-time bin capacity updates posed a design challenge in balancing information clarity without clutter. Creating an engaging rewards system required a balance between simplicity and motivation to encourage recycling. Ensuring accessibility for all users, while maintaining a visually appealing design, required careful consideration of color contrast and text size. Lastly, making the app responsive across devices while keeping the design consistent was crucial for usability.
    
        **Skills Learned:** Figma design, sustainable UI/UX, accessibility, responsive design, user engagement strategies.`,
      image: '/images/BELEAF.png',
      repoLink: 'https://www.figma.com/design/m48fdKxBXSRiMpt2ECQGcA/Final-Prototype-(Qualifiers)?node-id=0-1&t=fFkT8VWpm5nBZRRk-1',
      videoLink: 'https://youtube.com/shorts/xRhez37ycwg?feature=share',
    },
    {
      id: 6,
      title: 'Portfolio Design',
      category: 'Graphic Design',
      techUsed: ['Adobe Illustrator', 'Photoshop'],
      yearPublished: 2021,
      colorScheme: 'Black, Gold',
      description:
        'Design a portfolio using Adobe Illustrator with modern aesthetics for namecards, stickers, and a web presence.',
      detailedDescription:
        `This project involved creating a cohesive personal brand for myself, designing a portfolio with a modern and sleek aesthetic. 
        Using Adobe Illustrator and Photoshop, I crafted the branding elements, including business cards, stickers, and a website. 
        The goal was to create a visually appealing yet functional design that could showcase my skills as a designer and developer. 
        
        One of the biggest challenges was maintaining consistency across all branding materials while ensuring each piece served its intended function. 
        Additionally, I focused on making the website responsive, ensuring it looked good on all devices.

        **Skills Learned:** Branding, design consistency, responsive web design, visual storytelling.`,
      image: '/images/PortfolioDesign.jpg',
      repoLink: 'https://github.com/username/Portfolio-Design',
      videoLink: 'https://www.youtube.com/watch?v=videoID',
    },
    {
      id: 7,
      title: 'Avatars Design',
      category: 'Graphic Design',
      techUsed: ['Adobe Illustrator', 'AI Tools'],
      yearPublished: 2022,
      colorScheme: 'Pastel',
      description:
        'Create unique avatars and character designs using AI generative tools and Adobe Illustrator.',
      detailedDescription:
        `For this project, I designed a series of unique avatars and characters using a mix of AI-powered tools and Adobe Illustrator. 
        The goal was to create original designs that could be used in various creative applications such as social media profiles and branding.
        
        I utilized AI tools to generate base designs and then refined them using Illustrator to add intricate details and personality to each character. 
        This project pushed me to explore AI tools in the design process, learning how to blend human creativity with AI assistance for effective outcomes.

        **Skills Learned:** AI-assisted design, character design, creative exploration with AI tools, digital art production.`,
      image: '/images/Avatars.jpg',
      repoLink: 'https://github.com/username/Avatars-Design',
      videoLink: 'https://www.youtube.com/watch?v=videoID',
    },
    {
      "id": 8,
      "title": "ChillSphere Mobile UI Design",
      "category": "UI/UX Design",
      "techUsed": ["Figma"],
      "yearPublished": 2025,
      "colorScheme": "Cool Tones, Soft Neutrals",
      "description": "Design the user interface for ChillSphere, an entertainment app that lets users watch movies, listen to music, and play mini-games and quizzes.",
      "detailedDescription":
        "For the ChillSphere mobile UI design, I created a user-friendly and engaging experience using Figma. The app offers a variety of entertainment options, including movie streaming, music listening, and interactive mini-games and quizzes. I focused on wireframes and prototypes to ensure a seamless user flow with easy access to each feature. **Challenges:** Designing a versatile app with multiple entertainment features while keeping the interface clean and easy to navigate. Ensuring smooth transitions between media types and maintaining a consistent design across all app sections. **Skills Learned:** Figma design, entertainment app UI/UX, user-centered design, responsive design.",
      "image": "images/ChillSphereApp.png",
      "repoLink": "https://www.figma.com/design/5jNZWnA36k2VB3kk33cuez/ChillSphere-6-Hi-fi-wireframe?node-id=0-1&t=ZFxxLrUN8rSprWmD-1",
      "videoLink": "https://youtube.com/shorts/YEKkl7zcUoI?feature=share"
    }
    
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

            <div className="project-meta-info">
              <p><strong>Technologies Used:</strong> {project.techUsed.join(', ')}</p>
              <p><strong>Year Published:</strong> {project.yearPublished}</p>
              <p><strong>Color Scheme:</strong> {project.colorScheme}</p>
            </div>

            <div className="project-detailed-description">
              <p><strong>Detailed Description:</strong></p>
              <p>{project.detailedDescription}</p>
            </div>

            <div className="project-links">
              <div className="project-repository">
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
              <div className="project-video">
                {project.videoLink && (
                  <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                    Watch Video Demo
                  </a>
                )}
              </div>
            </div>

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
