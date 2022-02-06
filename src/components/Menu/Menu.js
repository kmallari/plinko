import React from "react";
import Auto from "./Auto";
import Manual from "./Manual";
import "./menu.css";

const Menu = ({
  handleAutoBet,
  handleBetAmount,
  handleRisk,
  handleRows,
  handleNumOfAutoBets,
  halfBet,
  doubleBet,
  autoBet,
  betAmount,
  randomTraverse,
  automatedTraverse,
  betStarted,
  numOfAutoBets,
}) => {
  return (
    <div className='menu'>
      <div className='bet-mode'>
        <button
          onClick={handleAutoBet}
          className={`${
            !autoBet ? `unselected-tab` : `selected-tab`
          } manual-button`}
          id='manual'
          disabled={betStarted ? true : null}
        >
          Manual
        </button>
        <button
          onClick={handleAutoBet}
          className={`${
            autoBet ? `unselected-tab` : `selected-tab`
          } auto-button`}
          id='auto'
          disabled={betStarted ? true : null}
        >
          Auto
        </button>
      </div>
      <div className='input'>
        <label htmlFor='bet-amount'>Bet Amount</label>
        <div className='bet-input'>
          <input
            onChange={handleBetAmount}
            type='number'
            id='bet-amount'
            name='bet-amount'
            min='0'
            value={betAmount}
            disabled={betStarted ? true : null}
          />
          <button
            onClick={halfBet}
            className='bet-modifier half'
            disabled={betStarted ? true : null}
          >
            ½
          </button>
          <button
            onClick={doubleBet}
            className='bet-modifier double'
            disabled={betStarted ? true : null}
          >
            2×
          </button>
        </div>
      </div>
      {/* buttons to half and double bet amount */}
      <div className='risk-rows'>
        <div className='input'>
          <label htmlFor='risk'>Risk</label>
          <select
            onChange={handleRisk}
            name='risk'
            id='risk'
            defaultValue='medium'
            disabled={betStarted ? true : null}
          >
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </div>
        <div className='input'>
          <label htmlFor='rows'>Rows</label>
          <select
            onChange={handleRows}
            name='rows'
            id='rows'
            defaultValue='8'
            disabled={betStarted ? true : null}
          >
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
          </select>
        </div>
      </div>
      {!autoBet ? (
        <Manual randomTraverse={randomTraverse} betStarted={betStarted} />
      ) : (
        <Auto
          automatedTraverse={automatedTraverse}
          handleNumOfAutoBets={handleNumOfAutoBets}
          numOfAutoBets={numOfAutoBets}
          betStarted={betStarted}
        />
      )}
    </div>
  );
};

export default Menu;
