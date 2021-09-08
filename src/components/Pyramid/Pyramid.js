import React from "react";

const Pyramid = ({
  rows,
  nodeArr,
  tempOldNodeArr
}) => {
  const circleStyle = {
    borderRadius: "50%",
    backgroundColor: "white",
    minWidth: `${10 / rows}em`,
    minHeight: `${10 / rows}em`,
  };

  const rowStyle = {
    display: "flex",
    gap: `${30 / rows}em`,
    alignItems: "center",
    justifyContent: "center",
  };

  const pyramidStyle = {
    display: "flex",
    flexDirection: "column",
    gap: `${30 / rows}em`,
  };
  return (
    <div style={pyramidStyle}>
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
          return <div key={i} className="multiplier">{node.data}×</div>;
        })}
      </div>
    </div>
  );
};

export default Pyramid;
