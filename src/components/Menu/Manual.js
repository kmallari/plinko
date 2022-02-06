import React from "react";

const Manual = ({ randomTraverse, betStarted }) => {
  // randomTraverse();
  return (
    <div>
      <button
        onClick={randomTraverse}
        className='bet-button'
        disabled={betStarted ? true : null}
      >
        Bet
      </button>
    </div>
  );
};

export default Manual;
