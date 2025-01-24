import React from 'react';

const Banner = () => {
  return (
    <section id="home" className="banner">
      <div className="banner-content">
        <div className="text">
          <h1>Welcome to my portfolio</h1>
          <h2>Hi, I am Cheng Zhi Xin.</h2>
        </div>
        <div className="image">
          <img src="images/profilepic.jpg" alt="Profile" className="round-image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
