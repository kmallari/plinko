import React from "react";
import { motion } from "framer-motion";

const Ball = ({ xPath, yPath }) => {
  return (
      <motion.div
        animate={{
          x: [0, 0, 30, 60, 30, 60, 90, 60, 90],
          y: [-20, 25, 70, 115, 160,  205, 250, 295, 335],
        }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          loop: Infinity,
          repeatDelay: 0,
        }}
      />
  );
};

export default Ball;
