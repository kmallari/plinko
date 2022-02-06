import React from "react";

const Auto = ({
  handleNumOfAutoBets,
  automatedTraverse,
  numOfAutoBets,
  betStarted,
}) => {
  return (
    <div className='auto-menu'>
      <div className='input'>
        <label htmlFor='num-of-bets'>Number of Bets</label>
        <input
          onChange={handleNumOfAutoBets}
          type='number'
          id='num-of-bets'
          name='num-of-bets'
          defaultValue={10}
          disabled={betStarted ? true : null}
        />
      </div>
      <button
        onClick={() => automatedTraverse(numOfAutoBets)}
        className='bet-button'
        disabled={betStarted ? true : null}
      >
        Start Autobet
      </button>
    </div>
  );
};

export default Auto;
