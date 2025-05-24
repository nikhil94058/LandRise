import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your payment processing logic
    console.log('Payment submitted');
    // Reset form fields after submission
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setName('');
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Expiry Date:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Name on Card:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="btn-primary">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
