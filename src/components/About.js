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
          <span style={tagStyle}>UI/UX Design</span>
          <span style={tagStyle}>Web Development</span>
          <span style={tagStyle}>Mobile App Development</span>
          <span style={tagStyle}>Problem-Solving</span>
          <span style={tagStyle}>HTML</span>
          <span style={tagStyle}>CSS</span>
          <span style={tagStyle}>JavaScript</span>
          <span style={tagStyle}>React</span>
          <span style={tagStyle}>React Native</span>
          <span style={tagStyle}>Photoshop</span>
          <span style={tagStyle}>Illustrator</span>
          <span style={tagStyle}>Figma</span>
        </div>

        {/* Download Resume Button */}
        <div style={{ marginTop: "2rem" }}>
          <a
            href="/Resume_PDF.pdf"  // Replace with your actual resume file path
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
};

// Inline styles for the download button
const buttonStyle = {
  display: "inline-block",
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "12px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  textAlign: "center",
  transition: "background-color 0.3s",
};

export default About;
