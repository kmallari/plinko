import React from "react";
import "./error.css";
import { motion } from "framer-motion";

const Error = ({ error }) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <motion.div
      initial={false}
      className='error'
      animate={error ? "open" : "closed"}
      variants={variants}
    >
      <p>
        <strong>ERROR!</strong> The bet amount you entered is more than your
        balance.
      </p>
    </motion.div>
  );
};

export default Error;
