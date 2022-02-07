import Pyramid from "./components/Pyramid/Pyramid";
import Menu from "./components/Menu/Menu";
import { useState, useEffect } from "react";
import "./App.css";
import Balance from "./components/Balance/Balance";
import Error from "./components/Error/Error";

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
  const [rows, setRows] = useState(8);
  const [betPath, setBetPath] = useState([]);
  const [betStarted, setBetStarted] = useState(false);
  const [numOfAutoBets, setNumOfAutoBets] = useState(10);
  const [error, setError] = useState(false);
  // Pyramid Code

  let rowCount = 1;

  // multipliers
  const sixteenRowMultipliers = [
    [16, 9, 2, 1.4, 1.4, 1.2, 1.1, 1, 0.5, 1, 1.1, 1.2, 1.4, 1.4, 2, 9, 16],
    [110, 41, 10, 5, 3, 1.5, 1, 0.5, 0.3, 0.5, 1, 1.5, 3, 5, 10, 41, 110],
    [1000, 130, 26, 9, 4, 2, 0.2, 0.2, 0.2, 0.2, 0.2, 2, 4, 9, 26, 130, 1000],
  ];
  const fifteenRowMultipliers = [
    [15, 8, 3, 2, 1.5, 1.1, 1, 0.7, 0.7, 1, 1.1, 1.5, 2, 3, 8, 15],
    [88, 18, 11, 5, 3, 1.3, 0.5, 0.3, 0.3, 0.5, 1.3, 3, 5, 11, 18, 88],
    [620, 83, 27, 8, 3, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5, 3, 8, 27, 83, 620],
  ];
  const fourteenRowMultipliers = [
    [7.1, 4, 1.9, 1.4, 1.3, 1.1, 1, 0.5, 1, 1.1, 1.3, 1.4, 1.9, 4, 7.1],
    [58, 15, 7, 4, 1.9, 1, 0.5, 0.2, 0.5, 1, 1.9, 4, 7, 15, 58],
    [420, 56, 18, 5, 1.9, 0.3, 0.2, 0.2, 0.2, 0.3, 1.9, 5, 18, 56, 420],
  ];
  const thirteenRowMultipliers = [
    [8.1, 4, 3, 1.9, 1.2, 0.9, 0.7, 0.7, 0.9, 1.2, 1.9, 3, 4, 8.1],
    [43, 13, 6, 3, 1.3, 0.7, 0.4, 0.4, 0.7, 1.3, 3, 6, 13, 43],
    [260, 37, 11, 4, 1, 0.2, 0.2, 0.2, 0.2, 1, 4, 11, 37, 260],
  ];
  const twelveRowMultipliers = [
    [10, 3, 1.6, 1.4, 1.1, 1, 0.5, 1, 1.1, 1.4, 1.6, 3, 10],
    [33, 11, 4, 2, 1.1, 0.6, 0.3, 0.6, 1.1, 2, 4, 11, 33],
    [170, 24, 8.1, 2, 0.7, 0.2, 0.2, 0.2, 0.7, 2, 8.1, 24, 170],
  ];
  const elevenRowMultipliers = [
    [8.4, 3, 1.9, 1.3, 1, 0.7, 0.7, 1, 1.3, 1.9, 3, 8.4],
    [24, 6, 3, 1.8, 0.7, 0.5, 0.5, 0.7, 1.8, 3, 6, 24],
    [120, 14, 5.2, 1.4, 0.4, 0.2, 0.2, 0.4, 1.4, 5.2, 14, 120],
  ];
  const tenRowMultipliers = [
    [8.9, 3, 1.4, 1.1, 1, 0.5, 1, 1.1, 1.4, 3, 8.9],
    [22, 5, 2, 1.4, 0.6, 0.4, 0.6, 1.4, 2, 5, 22],
    [76, 10, 3, 0.9, 0.3, 0.2, 0.3, 0.9, 3, 10, 76],
  ];
  const nineRowMultipliers = [
    [5.6, 2, 1.6, 1, 0.7, 0.7, 1, 1.6, 2, 5.6],
    [18, 4, 1.7, 0.9, 0.5, 0.5, 0.9, 1.7, 4, 18],
    [43, 7, 2, 0.6, 0.2, 0.2, 0.6, 2, 7, 43],
  ];
  const eightRowMultipliers = [
    [5.6, 2.1, 1.1, 1, 0.5, 1, 1.1, 2.1, 5.6],
    [13, 3, 1.3, 0.7, 0.4, 0.7, 1.3, 3, 13],
    [29, 4, 1.5, 0.3, 0.2, 0.3, 1.5, 4, 29],
  ];

  const [multipliers, setMultipliers] = useState(twelveRowMultipliers);

  useEffect(() => {
    switch (rows) {
      case 8:
        setMultipliers(eightRowMultipliers);
        break;
      case 9:
        setMultipliers(nineRowMultipliers);
        break;
      case 10:
        setMultipliers(tenRowMultipliers);
        break;
      case 11:
        setMultipliers(elevenRowMultipliers);
        break;
      case 12:
        setMultipliers(twelveRowMultipliers);
        break;
      case 13:
        setMultipliers(thirteenRowMultipliers);
        break;
      case 14:
        setMultipliers(fourteenRowMultipliers);
        break;
      case 15:
        setMultipliers(fifteenRowMultipliers);
        break;
      case 16:
        setMultipliers(sixteenRowMultipliers);
        break;
      default:
        break;
    }
  }, [rows]);

  const mainNode = new Node(0);
  const list = new LinkedList(mainNode);

  let tempOldNodeArr = [mainNode];
  let tempNewNodeArr = [];
  let nodeArr = [];

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
    tempOldNodeArr[i + 1].data = multipliers[risk][i];
  }
  tempOldNodeArr.shift();
  tempOldNodeArr.pop();

  const handleBetAmount = (e) => {
    setBetAmount(parseFloat(e.target.value));
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

  // betting function
  const randomTraverse = async () => {
    if (!betStarted) {
      let multiplier = 0;
      if (betAmount > balance) {
        // add popup here
        console.log("cannot be");
        setError(true);
        await delay(2000);
        setError(false);
        return;
      }
      const headDup = list.head;
      let path = [];
      setBetStarted(true);
      while (list.head) {
        multiplier = list.head.data;
        if (Math.random() > 0.5) {
          list.head = list.head.nextLeft;
          path.push(-1);
        } else {
          list.head = list.head.nextRight;
          path.push(1);
        }
      }

      path.pop();
      setBetPath(path);

      await delay(1200);
      await setBalance(
        (balance) => balance - betAmount + betAmount * multiplier
      );
      await setBetStarted(false);
      list.head = headDup;

    }
  };

  const delay = (ms) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  };

  const automatedTraverse = async () => {
    if (betAmount * numOfAutoBets > balance) {
      // add popup here
      console.log("cannot be");
      setError(true);
      await delay(2000);
      setError(false);
      setBetStarted(false);
      return;
    }
    setBetStarted(true);
    for (let i = 0; i < numOfAutoBets; i++) {
        randomTraverse();
        await delay(1200);
    }
    setBetStarted(false);
  };

  const handleRows = (e) => {
    setRows(Number(e.target.value));
  };

  const handleNumOfAutoBets = (e) => {
    setNumOfAutoBets(e.target.value);
  };

  const handleBalance = (bal) => {
    if (bal === "") {
      setBalance(0);
      return;
    }
    setBalance(parseFloat(bal));
  };

  const halfBet = () => {
    setBetAmount(betAmount / 2);
  };

  const doubleBet = () => {
    setBetAmount(betAmount * 2);
  };

  const variants = {
    start: {
      opacity: 1,
    },
    end: {
      opacity: 0,
    },
  };

  return (
    <div className='app'>
      <div>
        <Balance
          handleBalance={handleBalance}
          balance={balance}
          betStarted={betStarted}
        />
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
          automatedTraverse={automatedTraverse}
          betStarted={betStarted}
        />
      </div>
      <Pyramid
        path={betPath}
        rows={rows}
        nodeArr={nodeArr}
        tempOldNodeArr={tempOldNodeArr}
        betStarted={betStarted}
      />
      <div className='error-module'>
        <Error error={error} />
      </div>
    </div>
  );
};

export default App;
