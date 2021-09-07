import React from "react";
import Auto from "./Auto";
import Manual from "./Manual";
import { useEffect } from "react";
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
}) => {
  const unselectedTab = {
    backgroundColor: "rgb(20, 42, 55)",
    color: "rgb(77, 95, 111)",
    border: "none",
  };

  const selectedTab = {
    backgroundColor: "rgb(47, 69, 83)",
    color: "rgb(105, 121, 139)",
    cursor: "pointer",
    border: "none",
  };

  return (
    <div className="menu">
      <div className="bet-mode">
        <button
          onClick={handleAutoBet}
          className={`${
            !autoBet ? `unselected-tab` : `selected-tab`
          } manual-button`}
          id="manual"
        >
          Manual
        </button>
        <button
          onClick={handleAutoBet}
          className={`${
            autoBet ? `unselected-tab` : `selected-tab`
          } auto-button`}
          id="auto"
        >
          Auto
        </button>
      </div>
      {/* <form action="" className="form-menu"> */}
      <div className="input">
        <label htmlFor="bet-amount">Bet Amount</label>
        <div>
          <input
            onChange={handleBetAmount}
            type="number"
            id="bet-amount"
            name="bet-amount"
            defaultValue="10"
            min="0"
            value={betAmount}
          />
          <button onClick={halfBet} className="bet-modifier">
            ½
          </button>
          <button onClick={doubleBet} className="bet-modifier">
            2×
          </button>
        </div>
      </div>
      {/* buttons to half and double bet amount */}
      <div className="input">
        <label htmlFor="risk">Risk</label>
        <select onChange={handleRisk} name="risk" id="risk">
          <option value="low">Low</option>
          <option selected value="medium">
            Medium
          </option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="input">
        <label htmlFor="rows">Rows</label>
        <select onChange={handleRows} name="rows" id="rows">
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option selected value="12">
            12
          </option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
        </select>
      </div>
      {!autoBet ? (
        <Manual />
      ) : (
        <Auto handleNumOfAutoBets={handleNumOfAutoBets} />
      )}
      {/* </form> */}
    </div>
  );
};

export default Menu;
