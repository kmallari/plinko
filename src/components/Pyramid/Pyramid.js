import React from "react";

class Node {
  constructor(data) {
    this.data = data;
    this.nextLeft = null;
    this.nextRight = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

const Pyramid = ({ numOfRows }) => {
  const rows = numOfRows; // make this variable
  let rowCount = 1;

  const mainNode = new Node(0);
  const list = new LinkedList(mainNode);

  let tempOldNodeArr = [mainNode];
  let tempNewNodeArr = [];
  let nodeArr = [];

  let risk = [13, 3, 1.3, 0.7, 0.4, 0.7, 1.3, 3, 13];

  let ctr = 1;

  for (let i = 0; i < rows + 2; i++) {
    for (let j = 0; j < rowCount + 1; j++) {
      tempNewNodeArr.push(new Node(ctr));
      ctr += 1;
    }
    for (let k = 0; k < rowCount; k++) {
      tempOldNodeArr[k].nextLeft = tempNewNodeArr[k];
      tempOldNodeArr[k].nextRight = tempNewNodeArr[k + 1];
    }
    nodeArr.push(tempOldNodeArr);
    tempOldNodeArr = [...tempNewNodeArr];
    tempNewNodeArr = [];
    rowCount += 1;
  }
  tempOldNodeArr[0].data = null;
  tempOldNodeArr[tempOldNodeArr.length - 1].data = null;
  for (let i = 0; i + 1 < tempOldNodeArr.length - 1; i++) {
    tempOldNodeArr[i + 1].data = risk[i];
  }
  tempOldNodeArr.shift();
  tempOldNodeArr.pop();
  // console.log(nodeArr[nodeArr.length-1])
  return (
    <div className="pyramid">
      {nodeArr.map((rowArr, i) => {
        if (i > 1) {
          return (
            <div key={i} className="row">
              {rowArr.map((node, j) => {
                return <div className="circle"></div>;
              })}
            </div>
          );
        }
      })}
      <div className="multipliers-row">
        {tempOldNodeArr.map((node, i) => {
          return <div className="multiplier">{node.data}</div>;
        })}
      </div>
    </div>
  );
}

export default Pyramid;
