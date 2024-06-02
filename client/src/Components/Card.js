import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ prop }) => {
  const add = "/" + prop.name;

  return (
    <motion.div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={add}>
        <img className="rounded-t-lg w-full" src="/assets/home2.png" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {prop.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {prop.des}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
