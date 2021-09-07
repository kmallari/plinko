import React from "react";

const Auto = ({ handleNumOfAutoBets }) => {
  return (
    <div>
      <label htmlFor="num-of-bets">Number of Bets</label>
      <input onChange={handleNumOfAutoBets} type="number" id="num-of-bets" name="num-of-bets" />
      <button>Start Autobet</button>
    </div>
  );
};

export default Auto;
