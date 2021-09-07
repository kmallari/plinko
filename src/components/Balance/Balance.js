import React, { useRef } from "react";

const Balance = ({ handleBalance, balance }) => {
  const inputRef = useRef();

  return (
    <div>
      <div>
        <label htmlFor="bal">Set balance</label>
        <input ref={inputRef} id="bal" name="bal" type="number" />
        {/* {console.log(inputRef.current.value)} */}
        <button
          onClick={() => {
            handleBalance(inputRef.current.value);
          }}
        >
          Set Balance
        </button>
      </div>
      <div>
        <p>Current balance: {balance} </p>
      </div>
    </div>
  );
};

export default Balance;
