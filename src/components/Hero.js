import React from 'react';
import { HERO_CONTENT } from '../constants';
import videoSrc from '../assets/videos/1.mp4';
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});


const Hero = () => {
  return (
    <div className='element'>
      <div className='hero-container'>
        <div className='full-width half-width'>
          <div className='flex-column lg-items-start'>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='hero-header'>
              Device Name
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='gradient-text'>
              Track Your Device
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='hero-content'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className='full-width half-width hero-image-padding'>
          <div className='hero-image-flex-center'>
            <motion.video
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className='profile-video image-size' src={videoSrc} autoPlay loop muted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
