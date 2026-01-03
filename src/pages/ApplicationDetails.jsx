import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getApplication, updateApplicationStatus, deleteApplication } from '../services/api';
import { 
  FiArrowLeft, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiCalendar,
  FiDownload,
  FiTrash2,
  FiExternalLink
} from 'react-icons/fi';

const ApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchApplication();
  }, [id]);

  const fetchApplication = async () => {
    try {
      const response = await getApplication(id);
      setApplication(response.data);
    } catch (error) {
      console.error('Error fetching application:', error);
      alert('Error loading application');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (newStatus) => {
    try {
      setUpdating(true);
      await updateApplicationStatus(id, newStatus);
      setApplication({ ...application, status: newStatus });
      alert('Status updated successfully');
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status');
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      try {
        await deleteApplication(id);
        navigate('/admin/dashboard');
      } catch (error) {
        console.error('Error deleting application:', error);
        alert('Error deleting application');
      }
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      reviewed: 'bg-yellow-100 text-yellow-800',
      shortlisted: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      archived: 'bg-gray-100 text-gray-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Application not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4"
          >
            <FiArrowLeft />
            <span>Back to Dashboard</span>
          </button>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {application.fullName}
              </h1>
              <p className="text-gray-600 mt-1">Application Details</p>
            </div>
            <button
              onClick={handleDelete}
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              <FiTrash2 />
              <span>Delete</span>
            </button>
          </div>
        </div>

        {/* Status Update */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Application Status
          </h2>
          <div className="flex items-center space-x-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                application.status
              )}`}
            >
              {application.status.toUpperCase()}
            </span>
            <select
              value={application.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              disabled={updating}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="new">New</option>
              <option value="reviewed">Reviewed</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <FiMail className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a
                  href={`mailto:${application.email}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {application.email}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FiPhone className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <a
                  href={`tel:${application.phone}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {application.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FiMapPin className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Country</p>
                <p className="text-gray-900 font-medium">{application.country}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FiCalendar className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Applied On</p>
                <p className="text-gray-900 font-medium">
                  {new Date(application.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Professional Information
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Years of Experience</p>
              <p className="text-gray-900 font-medium text-lg">
                {application.yearsOfExperience} years
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Primary Skills</p>
              <div className="flex flex-wrap gap-2">
                {application.primarySkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Portfolio / GitHub / LinkedIn</p>
              <a
                href={application.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
              >
                <span>{application.portfolioUrl}</span>
                <FiExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Cover Letter */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Cover Letter
          </h2>
          <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {application.coverLetter}
          </p>
        </div>

        {/* Resume */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Resume</h2>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="text-gray-900 font-medium">
                {application.resumeOriginalName}
              </p>
              <p className="text-sm text-gray-600">PDF Document</p>
            </div>
            <a
              href={`http://localhost:5000${application.resumeUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <FiDownload />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;