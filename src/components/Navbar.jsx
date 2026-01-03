import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiCode, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = localStorage.getItem('adminToken');
  const isAdminRoute = location.pathname.startsWith('/admin');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FiCode className="text-3xl text-blue-600" />
            <span className="text-xl font-bold text-gray-800">
              DevHire
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {!isAdminRoute && (
              <>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Home
                </Link>
                <Link
                  to="/apply"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                >
                  Apply Now
                </Link>
              </>
            )}

            {isAdminRoute && isAdmin && (
              <>
                <Link
                  to="/admin/dashboard"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;