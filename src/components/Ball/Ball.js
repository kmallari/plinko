import React from "react";
import { motion } from "framer-motion";

const Ball = ({ rows, path = [], betStarted }) => {
  // path = [1, 1, -1, 1, -1, 1, 1, -1, -1, 1]; // LANDS AT RIGHT 0.7
  // path = [1, -1, 1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, 1, -1, 1]; // LANDS AT RIGHT 0.5
  // path = [1, 1, -1, 1, -1, 1, 1, -1, -1, 1]; // LANDS AT RIGHT 0.7
  // path = [-1, -1, 1, -1, -1, 1, 1, 1, -1, -1] // LEFT 0.7
  // path = [-1, -1, 1, 1, -1, 1, -1, 1, 1, -1]; // 0.4

  let xDistance = 0;
  let yDistance = 0;

  switch (rows) {
    case 8:
      xDistance = 21;
      yDistance = 336 / rows;
      break;
    case 9:
      xDistance = 19;
      yDistance = 39;
      break;
    case 10:
      xDistance = 17;
      yDistance = 35;
      break;
    case 11:
      xDistance = 15;
      yDistance = 31;
      break;
    case 12:
      xDistance = 13;
      yDistance = 29;
      break;
    case 13:
      xDistance = 12.5;
      yDistance = 26.5;
      break;
    case 14:
      xDistance = 12;
      yDistance = 24.5;
      break;
    case 15:
      xDistance = 11.5;
      yDistance = 23;
      break;
    case 16:
      xDistance = 10;
      yDistance = 21.5;
      break;
    default:
      xDistance = 0;
  }

  let yPath = [];
  let xPath = [];

  for (let i = 1; i <= rows + 2; i++) {
    yPath.push(yDistance * i);
  }
  for (let i = 0; i < rows + 2; i++) {
    if (i === 0) {
      if (path[i] === -1) {
        xPath.push(-xDistance);
      } else {
        xPath.push(xDistance);
      }
      continue;
    }
    if (path[i] === -1) {
      xPath.push(xPath[i - 1] - xDistance);
    } else {
      xPath.push(xPath[i - 1] + xDistance);
    }
  }

  switch (rows) {
    case 8:
      yPath[yPath.length - 1] -= 16;
      break;
    case 9:
      yPath[yPath.length - 1] -= 18;
      break;
    case 10:
      yPath[yPath.length - 1] -= 17;
      break;
    case 11:
      yPath[yPath.length - 1] -= 7;
      break;
    case 12:
      yPath[yPath.length - 1] -= 14;
      break;
    case 13:
      yPath[yPath.length - 1] -= 9;
      break;
    case 14:
      yPath[yPath.length - 1] -= 8;
      break;
    case 15:
      yPath[yPath.length - 1] -= 10;
      break;
    case 16:
      yPath[yPath.length - 1] -= 9.5;
      break;
    default:
      yPath[yPath.length - 1] -= 0;
  }

  const variants = {
    start: {
      // for 8 rows
      x: xPath,
      y: yPath,
    },
    end: {
      x: [],
      y: [],
    },
  };

  // console.log("path", path);
  // console.log("ypath", yPath);
  // console.log("xpath", xPath);

  return (
    <motion.div
      variants={variants}
      animate={betStarted ? "start" : "end"}
      transition={{
        duration: 1.2,
        ease: "easeIn",
        // loop: Infinity,
        repeatDelay: 0,
      }}
    />
  );
};

export default Ball;
