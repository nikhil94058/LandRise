import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ home, togglePop }) => {
  return (
    <motion.div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden m-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => togglePop(home)}
    >
      <div className="card__image">
        <img className="rounded-t-lg w-full" src={home.image} alt="Home" />
      </div>
      <div className="p-5">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {home.attributes[0].value} ETH
        </h4>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>{home.attributes[2].value}</strong> bds |
          <strong>{home.attributes[3].value}</strong> ba |
          <strong>{home.attributes[4].value}</strong> sqft
        </p>
        <p>{home.address}</p>
      </div>
    </motion.div>
  );
};

export default Card;
