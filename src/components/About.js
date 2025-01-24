import React from "react";

// Inline styles for the skill tags
const tagStyle = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  backgroundColor: "#f0f0f0",
  borderRadius: "20px",
  fontSize: "0.9rem",
  fontWeight: "500",
  color: "#333",
  border: "1px solid #ddd",
  cursor: "pointer",
  transition: "all 0.3s ease", // Smooth transition for hover effects
};

const tagHoverStyle = {
  backgroundColor: "#ff5733", // New background color on hover
  color: "#fff",             // Text color changes to white
  transform: "scale(1.1)",   // Slight scaling effect
};

// SkillTag component to handle hover animation
const SkillTag = ({ children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span
      style={isHovered ? { ...tagStyle, ...tagHoverStyle } : tagStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </span>
  );
};

// Inline styles for the download button
const buttonStyle = {
  display: "inline-block",
  backgroundColor: "#ff5733",
  color: "#fff",
  padding: "12px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  textAlign: "center",
  transition: "background-color 0.3s",
};

const About = () => {
  return (
    <section id="about" style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      {/* Left section - About Text */}
      <div style={{ flex: 1 }}>
        <h2>About Me</h2>
        <p>
          Hi, I’m Zhi Xin! I’m a Digital Design and Development (DDDD) student passionate about creating engaging 
          web and mobile apps. I love solving puzzles and tackling challenges, which drives my creativity in coding and design.
        </p>
        <p>
          This portfolio showcases my journey through projects in UI/UX design, web development, and more. 
          Let’s build something amazing together!
        </p>
      </div>

      {/* Right section - Skill Set */}
      <div style={{ flex: 1 }}>
        <h2>Skill Set</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <SkillTag>UI/UX Design</SkillTag>
          <SkillTag>Web Development</SkillTag>
          <SkillTag>Mobile App Development</SkillTag>
          <SkillTag>Problem-Solving</SkillTag>
          <SkillTag>HTML</SkillTag>
          <SkillTag>CSS</SkillTag>
          <SkillTag>JavaScript</SkillTag>
          <SkillTag>React</SkillTag>
          <SkillTag>React Native</SkillTag>
          <SkillTag>Photoshop</SkillTag>
          <SkillTag>Illustrator</SkillTag>
          <SkillTag>Figma</SkillTag>
        </div>

        {/* Download Resume Button */}
        <div style={{ marginTop: "2rem" }}>
          <a
            href="/Resume_PDF.pdf" // Replace with your actual resume file path
            download
            style={buttonStyle}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
