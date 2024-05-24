import React from 'react'
import { SiSpeedtest } from "react-icons/si";
import { LiaMountainSolid } from "react-icons/lia";
import { IoLogoBuffer } from "react-icons/io5";
import { GiVibratingBall } from "react-icons/gi";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const Features = () => {
  return (
    <div className="features-border">
      <motion.h2
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 1.5 }}
        className="features-header-title">
        Features
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="features-flex-container">
        <div className="features-item">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="features-rounded-border">
            <SiSpeedtest className="velocity-icon-style" />
          </motion.div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2}}
            className="icon-description">
            Velocity
          </motion.p>
        </div>
        <div className="features-item">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="features-rounded-border">
            <LiaMountainSolid className="altitude-icon-style" />
          </motion.div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
            className="icon-description">
            Altitude
          </motion.p>
        </div>
        <div className="features-item">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="features-rounded-border">
            <GiVibratingBall className="vibration-icon-style" />
          </motion.div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
            className="icon-description">
            Vibration
          </motion.p>
        </div>
        <div className="features-item">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="features-rounded-border">
            <IoLogoBuffer className="buffer-icon-style" />
          </motion.div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
            className="icon-description">
            Backup
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

export default Features
