import React from 'react';
import { assets } from '../assets/assets';
import { FaInstagram, FaLinkedinIn,FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-14 my-10 mt-10 text-sm">
        <div className="flex flex-row items-start gap-6">
          {/* Image on the left */}
          <img src={assets.logo} className="w-32" alt="Logo" />
          {/* Description and social icons on the right */}
          <div>
            <p className="text-gray-600">
              This platform, <strong>Walkspace</strong>, is proudly developed by us, a Software Service and Production Company based in India. 
              Dedicated to delivering innovative solutions, we aim to empower businesses and individuals through cutting-edge technology.
            </p>
            <p className="text-gray-400 mt-3">
              Follow us now! Stay updated on the latest trends, exclusive offers, and more.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/sodmiseaniket/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aniketsodmise" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <div className="flex justify-center items-center py-5 text-sm text-gray-700 gap-3">
          <p>Copyright 2025 - All Rights Reserved.</p>
          <a href="https://github.com/sodmiseaniket/sodmiseaniket.github.io" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
