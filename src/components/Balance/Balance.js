import React, { useRef } from "react";

const Balance = ({ handleBalance, balance }) => {
  const inputRef = useRef();

  return (
    <div className="balance-section">
      <div className="set-balance">
        <div className="input">
          <label htmlFor="bal">Set balance</label>
          <div className="bal-input">
            <input
              ref={inputRef}
              id="bal"
              name="bal"
              type="number"
              min="0"
              defaultValue="100"
            />
            <button
              onClick={() => {
                handleBalance(inputRef.current.value);
              }}
              className="set-balance-btn"
            >
              Set Balance
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>
          Current balance: <span id="balance">{balance}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Balance;
