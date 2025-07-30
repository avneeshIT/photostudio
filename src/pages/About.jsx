import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-purple-50 text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">About Us</h1>

        <p className="text-lg text-center mb-10">
          We are a team of passionate photographers and tech enthusiasts dedicated to bringing quality photo services to your fingertips.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">📸 Photography Services</h2>
            <p>
              From pre-wedding shoots to full event coverage, we offer customized photography services. Our professional team ensures every shot is a memory preserved.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">🖼️ Passport Photo Delivery</h2>
            <p>
              Upload your image online and get passport-size photos printed and delivered to your home. Fast, affordable, and professional quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">🚀 Easy Booking</h2>
            <p>
              Our platform makes it simple to schedule a shoot or upload a picture. Whether it’s a wedding or a passport photo, we’ve got you covered.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">👥 Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Experienced photographers</li>
              <li>Affordable packages</li>
              <li>On-time delivery</li>
              <li>Customer-first support</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg">
            Thank you for trusting us to capture your precious moments and make your official photos hassle-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
