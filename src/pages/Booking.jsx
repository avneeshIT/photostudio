import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, eventType, date, location } = formData;

  // Basic name validation (at least 2 characters and only letters/spaces)
  if (!/^[A-Za-z\s]{2,}$/.test(name)) {
    alert('Please enter a valid name (only letters and at least 2 characters).');
    return;
  }

  // Basic email validation
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Event type check
  if (eventType.trim().length < 3) {
    alert('Please specify a valid event type (e.g., Wedding, Party).');
    return;
  }

  // Date validation (cannot be in the past)
  const today = new Date().toISOString().split('T')[0];
  if (date < today) {
    alert('Event date cannot be in the past.');
    return;
  }

  // Location check
  if (location.trim().length < 3) {
    alert('Please enter a valid location.');
    return;
  }

  // All validations passed
  console.log('Booking Form Data:', formData);
  alert('Your booking request has been submitted!');
};


  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">Book an Event</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input 
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input 
            type="text"
            name="eventType"
            placeholder="Event Type (e.g., Wedding, Birthday)"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input 
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input 
            type="text"
            name="location"
            placeholder="Event Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea 
            name="message"
            placeholder="Additional Notes (optional)"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg transition duration-300"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
