import React from "react";
import "./pyramid.css";

const Pyramid = ({ rows, nodeArr, tempOldNodeArr }) => {
  const circleStyle = {
    borderRadius: "50%",
    backgroundColor: "white",
    minWidth: `${5 / rows}em`,
    minHeight: `${5 / rows}em`,
  };

  const rowStyle = {
    display: "flex",
    gap: `${16 / rows}em`,
    alignItems: "center",
    justifyContent: "center",
  };

  const pyramidStyle = {
    display: "flex",
    flexDirection: "column",
    gap: `${16 / rows}em`,
  };

  const multiplierStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${4.6 / rows}em ${0 / rows}em`, // change
    backgroundColor: "rgb(219, 59, 31)", // change?
    width: `${
      rows === 8 || rows === 9
        ? 29 / rows
        : rows === 10 || rows === 11
        ? 28 / rows
        : rows === 12 || rows === 13
        ? 27 / rows
        : rows === 14
        ? 26 / rows
        : 25 / rows
    }em`, // change
    margin: "0 0.2em",
    borderRadius: "0.22em",
    color: "white",
    fontSize: "0.624em",
    borderBottom: "0.3em solid rgba(0, 0, 0, 0.233)",
  };

  return (
    <div style={pyramidStyle} className="pyramid">
      {nodeArr.map((rowArr, i) => {
        if (i > 1) {
          return (
            <div key={i} style={rowStyle}>
              {rowArr.map((node, j) => {
                return <div key={j} style={circleStyle}></div>;
              })}
            </div>
          );
        }
      })}
      <div className="multipliers-row">
        {tempOldNodeArr.map((node, i) => {
          return (
            <div key={i} style={multiplierStyle}>
              {node.data}
              {/* {node.data.toString().length < 3 ? "×" : ""} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pyramid;
