import React from "react";
import Auto from "./Auto";
import Manual from "./Manual";
import { useEffect } from "react";

const Menu = ({
  handleAutoBet,
  handleBetAmount,
  handleRisk,
  handleRows,
  handleNumOfAutoBets,
  autoBet,
}) => {
  return (
    <div>
      <div>
        <button onClick={handleAutoBet} id="manual">
          Manual
        </button>
        <button onClick={handleAutoBet} id="auto">
          Auto
        </button>
      </div>
      <form action="">
        <label htmlFor="bet-amount">Bet Amount</label>
        <input
          onChange={handleBetAmount}
          type="number"
          id="bet-amount"
          name="bet-amount"
        />
        {/* buttons to half and double bet amount */}
        <label htmlFor="risk">Risk</label>
        <select onChange={handleRisk} name="risk" id="risk">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label htmlFor="rows">Rows</label>
        <select onChange={handleRows} name="rows" id="rows">
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
        </select>
        {!autoBet ? (
          <Manual />
        ) : (
          <Auto handleNumOfAutoBets={handleNumOfAutoBets} />
        )}
      </form>
    </div>
  );
};

export default Menu;
