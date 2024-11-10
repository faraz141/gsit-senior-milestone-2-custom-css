import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './index.css'; // Import your CSS file

const MyComponent = () => {
  return (
    <div className="container">
      <div className="content">
        {/* Left Side - Text Content */}
        <div className="text-content">
          <h1 className="greeting">
            Hi, I am Rishabh <span className="wave">👋</span>
          </h1>
          <p className="description">
            I’m a UX Designer and a Developer (React.js & Node.js) with a focus
            on creating exceptional digital experiences that are user-centric,
            accessible, usable, visually appealing, and responsive. I have been
            designing web and android applications for over a year and
            developing web applications for over a year now. I have a deep
            passion for designing and researching user psychology.
          </p>

          <div className="location">
            <span className="location-text">📍 Kanpur, India</span>
            <span className="availability">| Available for new projects</span>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <FaTwitter className="icon twitter" />
            <FaGithub className="icon github" />
            <FaLinkedin className="icon linkedin" />
          </div>
        </div>

        {/* Right Side - Profile Image with Frame */}
        <div className="image-frame">
          <div className="profile-image">
            <Image
              src="/imags/faraz-fiverr.png" // Replace with the path to your profile image
              alt="Profile Picture"
              // layout="fill"
              // objectFit="cover"
              className="rounded-lg"
              width={280}
              height={320}
              style={{
                width: '280px',
                height: '320px',
                border: '8px solid #030712',
                marginTop: '-40px',
                marginLeft: '-48px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
