import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DevHire</h3>
            <p className="text-gray-400 mb-4">
              Building the future of mobile applications. Join our team of talented developers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/apply" className="text-gray-400 hover:text-white transition">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="/admin/login" className="text-gray-400 hover:text-white transition">
                  Admin Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: sinduriyae@gmail.com</li>
              <li>Phone: +91 8770253275</li>
              <li>Address: Waidhan singrauli 486886 (M.P.) India </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevHire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;