import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import the library for handling cookies

const PaymentForm = ({ nft, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [newOwnerEmail, setNewOwnerEmail] = useState('');

  useEffect(() => {
    // Fetch the new owner's email from cookies on component mount
    const token = Cookies.get('token');
    // Extract the email from the token as per your token structure
    // Example: If token is JWT, you may decode it to get user info including email
    const decodedToken = decodeToken(token);
    if (decodedToken && decodedToken.email) {
      setNewOwnerEmail(decodedToken.email);
    }
  }, []);

  const decodeToken = (token) => {
    // Implement your decoding logic here based on your token format
    // Example: If using JWT, you would decode the token to get user info
    // For simplicity, assuming a plain email token for demonstration
    try {
      const decoded = atob(token.split('.')[1]);
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements || !newOwnerEmail) {
      setIsProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setIsProcessing(false);
      return;
    }

    try {
      const response = await axios.post(`/api/buy-nft/${nft._id}`, {
        paymentMethodId: paymentMethod.id,
        newOwnerEmail: newOwnerEmail, // Pass the new owner's email to the backend
      });

      if (response.data.success) {
        setPaymentStatus('Payment successful! Ownership transferred.');
        onSuccess(); // Trigger any success actions (e.g., close modal)
      } else {
        setError('Payment failed! Please try again.');
      }
    } catch (err) {
      setError('There was an error processing your payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-element-container">
        <CardElement options={{ style: cardElementStyle }} />
      </div>
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Confirm Deal'}
      </button>
      {error && <div className="error">{error}</div>}
      {paymentStatus && <div className="success">{paymentStatus}</div>}
    </form>
  );
};

const cardElementStyle = {
  base: {
    fontSize: '16px',
    fontFamily: '"Arial", sans-serif',
    color: '#32325d',
  },
};

export default PaymentForm;
