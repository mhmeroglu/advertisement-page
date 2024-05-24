import React from 'react';
import { CONTACT } from "../constants";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="contact-border">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="contact-header-title">
        Get in Touch
      </motion.h1>
      <div className="contact-info">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="contact-details">
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="contact-details">
          {CONTACT.phoneNo}
        </motion.p>
        <p>{CONTACT.email}</p>
      </div>
    </div>
  );
};

export default Contact;
