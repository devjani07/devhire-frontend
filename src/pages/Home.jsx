import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiUsers, FiTrendingUp, FiAward, FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const features = [
    {
      icon: <FiCode className="text-4xl text-blue-600" />,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest mobile development frameworks and tools.',
    },
    {
      icon: <FiUsers className="text-4xl text-blue-600" />,
      title: 'Collaborative Team',
      description: 'Join a diverse team of talented developers from around the world.',
    },
    {
      icon: <FiTrendingUp className="text-4xl text-blue-600" />,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career progression paths.',
    },
    {
      icon: <FiAward className="text-4xl text-blue-600" />,
      title: 'Competitive Benefits',
      description: 'Attractive salary packages, health benefits, and flexible work arrangements.',
    },
  ];

  const skills = [
    'Android Development',
    'iOS Development',
    'Flutter',
    'React Native',
    'Backend Development',
    'UI/UX Design',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team of Elite Developers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Build innovative mobile applications that impact millions of users worldwide
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105"
            >
              <span>Apply as App Developer</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join DevHire?
            </h2>
            <p className="text-xl text-gray-600">
              We offer an environment where developers thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We're Looking For
            </h2>
            <p className="text-xl text-gray-600">
              Talented developers with expertise in various technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-200 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Submit your application today and join our growing team
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105"
          >
            <span>Apply Now</span>
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;