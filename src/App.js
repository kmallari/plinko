/*

8 ROWS
  - 9 multipliers
  - 10 final circles

12 ROWS
  - 13 multipliers
  - 14 final circles

16 ROWS
  - 17 multipliers
  - 18 final circles

let x => number of rows
multipliers = x + 1
final circles = x + 2

*/
import Pyramid from "./components/Pyramid/Pyramid";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import "./App.css";
import Balance from "./components/Balance/Balance";

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

const App = () => {
  const [balance, setBalance] = useState(100);
  const [autoBet, setAutoBet] = useState(false);
  const [betAmount, setBetAmount] = useState(10);
  const [risk, setRisk] = useState(1);
  const [rows, setRows] = useState(12);
  const [numOfAutoBets, setNumOfAutoBets] = useState(0);
  // Pyramid Code

  let rowCount = 1;

  // STYLES
  const mainNode = new Node(0);
  const list = new LinkedList(mainNode);

  let tempOldNodeArr = [mainNode];
  let tempNewNodeArr = [];
  let nodeArr = [];

  let riskMultipliers = [13, 3, 1.3, 0.7, 0.4, 0.7, 1.3, 3, 13];

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
    tempOldNodeArr[i + 1].data = riskMultipliers[i];
  }
  tempOldNodeArr.shift();
  tempOldNodeArr.pop();

  // -------

  const handleBetAmount = (e) => {
    setBetAmount(e.target.value);
  };

  const handleAutoBet = (e) => {
    e.target.id === "auto" ? setAutoBet(true) : setAutoBet(false);
  };

  const handleRisk = (e) => {
    switch (e.target.value) {
      case "low":
        setRisk(0);
        break;
      case "medium":
        setRisk(1);
        break;
      case "high":
        setRisk(2);
        break;
      default:
        break;
    }
  };

  const randomTraverse = (e) => {
    const headDup = list.head;
    while (list.head) {
      console.log(list.head.data);
      Math.random() > 0.5
        ? (list.head = list.head.nextLeft)
        : (list.head = list.head.nextRight);
    }
    list.head = headDup;
  };

  const handleRows = (e) => {
    setRows(Number(e.target.value));
  };

  const handleNumOfAutoBets = (e) => {
    setNumOfAutoBets(e.target.value);
  };

  const handleBalance = (bal) => {
    setBalance(bal);
  };

  const halfBet = () => {
    setBetAmount(betAmount / 2);
    console.log(betAmount);
  };

  const doubleBet = () => {
    setBetAmount(betAmount * 2);
  };

  return (
    <div className="app">
      <div>
        <Balance handleBalance={handleBalance} balance={balance} />
        <Menu
          handleAutoBet={handleAutoBet}
          handleBetAmount={handleBetAmount}
          autoBet={autoBet}
          handleRisk={handleRisk}
          handleRows={handleRows}
          handleNumOfAutoBets={handleNumOfAutoBets}
          halfBet={halfBet}
          doubleBet={doubleBet}
          betAmount={betAmount}
          randomTraverse={randomTraverse}
        />
      </div>
      <Pyramid rows={rows} nodeArr={nodeArr} tempOldNodeArr={tempOldNodeArr} />
    </div>
  );
};

export default App;
