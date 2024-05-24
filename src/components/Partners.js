import React from 'react';
import { PARTNERS } from '../constants';
import { motion } from "framer-motion"

const Partners = () => {
  return (
    <div className="partners-border">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="partners-header-title">
        Partners
      </motion.h1>
      <div>
        {PARTNERS.map((partners, index) => (
          <div key={index} className="partners-item">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="partners-image-container">
              <img
                src={partners.image}
                width={150}
                height={150}
                alt={partners.title}
                className="partners-image"
              />
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="partners-details">
              <h6 className="partners-title">{partners.title}</h6>
              <p className="partners-description">{partners.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
