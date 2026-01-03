import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiHome } from 'react-icons/fi';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <FiCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Application Submitted!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for applying to join our team. We have received your application
            and will review it carefully.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              You will receive a confirmation email shortly. Our team will get back to
              you within 5-7 business days.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <FiHome />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;