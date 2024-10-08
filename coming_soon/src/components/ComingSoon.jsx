//import React from 'react';
import React, { useEffect } from 'react';
import './ComingSoon.css'; // Import the custom CSS for animations
import universityLogo from '../assets/bu-logo.png';
import clubLogo from '../assets/club-logo.png';


const ComingSoon = () => {

  useEffect(() => {
    const circles = document.querySelectorAll('.circles li');
    circles.forEach(circle => {
      const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
      circle.style.background = randomColor;
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">
  
      {/* Club Logo */}
      <img src={clubLogo} alt="Club Logo" className="logo top-left" />

      {/* University Logo */}
      <a href="https://www.bennett.edu.in/" target="_blank" rel="noopener noreferrer">
          <img src={universityLogo} alt="University Logo" className="logo top-right" />
        </a>
      {/* Background Animation */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
      <h1 className="coming-soon handjet-custom animate__animated animate__fadeIn">
        Coming Soon
      </h1>
      <p className="stay-tuned handjet-custom">
        Stay tuned for something awesome!
      </p>
    </div>

      {/* Social Links */}
      <div className="absolute bottom-4 flex space-x-4 z-10">
        
      <a href="https://chat.whatsapp.com/JAkwVFxi68a4JZYZvjSVu2" target="_blank" rel="noopener noreferrer" className="text-whatsapp-green hover:text-gray-400 icon">
      <i className="fab fa-whatsapp fa-2x"></i>
      </a>
      
      <a href="https://www.instagram.com/solacestudiobu/" target="_blank" rel="noopener noreferrer" className="text-instagram-pink hover:text-gray-400 icon">
      <i className="fab fa-instagram fa-2x"></i>
      </a>
      
      <a href="https://discord.gg/FGjJJQEtJv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 icon">
      <i className="fab fa-discord fa-2x"></i>
      </a>

      <a href="mailto:solace.studio@bennett.edu.in" className="text-white hover:text-gray-400 icon">
      <i className="fas fa-envelope fa-2x"></i>
      </a>

      <a href="https://www.linkedin.com/company/solace-studio-bu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 icon">
      <i className="fab fa-linkedin fa-2x"></i>
      </a>


      </div>
    </div>
  );
}

export default ComingSoon;
