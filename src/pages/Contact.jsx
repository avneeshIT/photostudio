import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-6 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">Contact Us</h1>
        <p className="text-center mb-10 text-lg">
          Have any questions, inquiries, or feedback? We'd love to hear from you!
        </p>

        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your email address"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-sm text-gray-500">
          📧 support@photobooking.com | 📞 +91 98765 43210
        </div>
      </div>
    </div>
  );
};

export default Contact;
