import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Monica Studio</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Book your event or get passport-size photos delivered to your doorstep!
        </p>
        <a
          href="/booking"
          className="mt-6 inline-block px-6 py-2 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
        >
          Book Now
        </a>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">📸 Event Photography Booking</h2>
          <p className="text-gray-700">
            Capture your memories with our professional photography services for weddings, birthdays, and other events.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">🖼️ Upload for Passport Photo</h2>
          <p className="text-gray-700">
            Upload your photo and get high-quality passport-size prints delivered to your home.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-purple-50 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Photography Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="Wedding"
            className="rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            alt="Portrait"
            className="rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="Fashion"
            className="rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            alt="Model"
            className="rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 text-sm py-4">
        <p>Made with ❤️ by Avneesh | © 2025 Monica Studio</p>
      </footer>
    </div>
  );
};

export default Home;
