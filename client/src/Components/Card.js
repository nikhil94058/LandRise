import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Card = ({ nft, togglePop }) => {
  const navigate = useNavigate();

  // Return null if nft is not defined
  if (!nft) {
    return null;
  }

  // Define a list of random images
  const randomImages = [
    '/assets/home2.png',
    '/assets/home3.png',
  ];

  // Function to get a random image from the list or default if nft.image is not defined
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  // Determine the image source
  const imageUrl = nft.image
    ? `https://gateway.pinata.cloud/ipfs/${nft.image}`
    : getRandomImage();

  const handleClick = () => {
    togglePop(nft);
    navigate(`/property/${nft._id}`, { state: { nft } });
  };

  return (
    <motion.div
      className="max-w-md md:min-w-[10rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden m-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <div className="card__image">
        <img className="rounded-t-lg w-full md:min-w-10 h-48 object-cover" src={imageUrl} alt="Home" />
      </div>
      <div className="p-5">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {nft.price ? `${nft.price} ETH` : 'Price not specified'}
        </h4>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>{nft.documents ? nft.documents.length : 0}</strong> documents
        </p>
        {nft.address && (
          <p className="text-gray-700 dark:text-gray-400">{nft.address}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
