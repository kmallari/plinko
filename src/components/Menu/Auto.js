import React from "react";

const Auto = ({ handleNumOfAutoBets, randomTraverse }) => {
  return (
    <div className="auto-menu">
      <div className="input">
        <label htmlFor="num-of-bets">Number of Bets</label>
        <input
          onChange={handleNumOfAutoBets}
          type="number"
          id="num-of-bets"
          name="num-of-bets"
        />
      </div>
      <button onClick={randomTraverse} className="bet-button">Start Autobet</button>
    </div>
  );
};

export default Auto;
