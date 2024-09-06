import React from 'react';
import './ComingSoon.css'; // Import the custom CSS for animations

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">
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
        </ul>
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold animate__animated animate__fadeIn">Coming Soon</h1>
        <p className="mt-4 text-xl">Stay tuned for something awesome!</p>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-4 flex space-x-4 z-10">
        
        <a href="https://chat.whatsapp.com/JAkwVFxi68a4JZYZvjSVu2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400"></a>
          <i className="fab fa-whatsapp fa-2x"></i>        

        <a href="https://www.instagram.com/solacestudiobu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400"></a>
          <i className="fab fa-instagram fa-2x"></i>
        <a href="https://discord.gg/FGjJJQEtJv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <i className="fab fa-discord fa-2x"></i>
        </a>
        <a href="mailto:solace.studio@bennett.edu.in" className="text-white hover:text-gray-400">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/company/solace-studio-bu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default ComingSoon;
