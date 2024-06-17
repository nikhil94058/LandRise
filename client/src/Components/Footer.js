import React, { useState } from 'react';
import { base_url } from '../urls';
const Footer = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { email, firstName, lastName, phone, review };

    try {
      const response = await fetch(`${base_url}/general/feedback/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Review submitted successfully');
        // Reset form fields
        setEmail("");
        setFirstname("");
        setLastName("");
        setPhone("");
        setReview("");
      } else {
        alert('Failed to submit review');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit review');
    }
  };

  return (
    <footer className="bg-yellow-500 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Footer Content */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-4xl text-white font-bold mb-4">ALL IN ONE REAL ESTATE PORTAL</h2>
            <p className="text-white text-sm md:text-base">
              Buy, sell, rent your property safely overcoming the hazards of fraudulent payments and transactions with blockchain-based information that remains untouched for years.
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <form className="max-w-sm mx-auto md:mx-0" onSubmit={handleSubmit}>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md py-2.5 px-4 text-sm text-gray-900"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="bg-white focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md py-2.5 px-4 text-sm text-gray-900"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-white focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md py-2.5 px-4 text-sm text-gray-900"
                  placeholder="Last Name"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  pattern="^\d{10}$"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md py-2.5 px-4 text-sm text-gray-900"
                  placeholder="Phone Number (1234567890)"
                  required
                />
                <input
                  type="text"
                  name="review"
                  id="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="bg-white focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md py-2.5 px-4 text-sm text-gray-900"
                  placeholder="feedback.."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg py-2.5 px-5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/">
              <img className="w-9 h-9" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com/">
              <img className="w-9 h-9" src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/">
              <img className="w-9 h-9" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-sm">
        &copy; 2024 .Landsol All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
