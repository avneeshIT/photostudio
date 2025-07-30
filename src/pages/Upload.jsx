import React, { useState } from 'react';
import { toast } from 'react-hot-toast';   // ye alert wale notification ko different way me show krta hai
const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paid, setPaid] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploaded(false);
    setShowPayment(false);
    setPaid(false);
  };

  const handleUpload = (e) => {
    e.preventDefault();
 if (!selectedFile || !selectedFile.type.startsWith('image/')) {
    return toast.error('Please upload a valid image file.');
   }

    // Simulate upload
    console.log('File uploaded:', selectedFile);
    setUploaded(true);
        toast.success('Image uploaded successfully!');

    
  };

  const handlePayment = (e) => {
  e.preventDefault();
  const form = e.target;
  const cardNumber = form[0].value.trim();
  const cardHolder = form[1].value.trim();
  const expiry = form[2].value.trim();
  const cvv = form[3].value.trim();

  const cardRegex = /^\d{16}$/;
  const nameRegex = /^[a-zA-Z ]{3,}$/;
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvRegex = /^\d{3}$/;

  if (!cardRegex.test(cardNumber)) {
    return toast.error('Enter a valid 16-digit card number');
  }

  if (!nameRegex.test(cardHolder)) {
    return toast.error('Enter a valid name');
  }

  if (!expiryRegex.test(expiry)) {
    return toast.error('Enter expiry in MM/YY format');
  }

  if (!cvvRegex.test(cvv)) {
    return toast.error('Enter a valid 3-digit CVV');
  }

  setPaid(true);
  toast.success('Payment successful! Your photo will be delivered soon.');
};


  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">Upload & Pay</h2>
        
   < form
  onSubmit={(e) => {
    handleUpload(e);
    e.target.reset(); // Resets form fields
  }}
   className="space-y-4"
  >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full file:bg-purple-600 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none file:cursor-pointer bg-gray-50 border border-purple-300 p-2 rounded-lg"
            required
          />.

          {selectedFile && (
            <div className="text-sm text-gray-600">
              Selected File: <strong>{selectedFile.name}</strong>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition duration-300"
          >
            Upload Image
          </button>
        </form>

        {uploaded && (
          <div className="mt-6 space-y-4">
            <div className="text-green-600 font-semibold text-center">
              ✅ Upload successful!
            </div>

            <button
              onClick={() => setShowPayment(true)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition duration-300"
            >
              Proceed to Payment
            </button>
          </div>
        )}

        {showPayment && !paid && (
          <form onSubmit={handlePayment} className="mt-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-700">Payment Details</h3>

            <input
              type="text"
              placeholder="Card Number"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 border border-gray-300 p-2 rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 border border-gray-300 p-2 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
            >
              Pay ₹49
            </button>
          </form>
        )}

        {paid && (
          <div className="mt-6 text-center text-green-700 font-semibold">
            🎉 Payment successful! We will deliver your passport photo soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
