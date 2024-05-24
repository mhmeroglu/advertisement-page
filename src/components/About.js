import React from 'react'
import { ABOUT_TEXT } from '../constants'
import videoSrc from '../assets/videos/2.mp4'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div class="about-border">
      <h2 class="about-header">
        About <span class="about-text">Device</span>
      </h2>
      <div class="about-flex-wrap">
        <div class="about-column-1">
          <div class="about-content">
            <motion.video
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='profile-video image-size' src={videoSrc} autoPlay loop muted />
          </div>
        </div>
        <div class="about-column-2">
          <div class="about-justify-content">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='about-content-style'>
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About