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

function App() {
  const [balance, setBalance] = useState(100)
  const [autoBet, setAutoBet] = useState(false);
  const [betAmount, setBetAmount] = useState(0);
  const [risk, setRisk] = useState(1);
  const [rows, setRows] = useState(12);
  const [numOfAutoBets, setNumOfAutoBets] = useState(0);

  const handleBetAmount = (e) => {
    setBetAmount(e.target.value);
  };

  const handleAutoBet = (e) => {
    e.target.id === "auto" ? setAutoBet(true) : setAutoBet(false);
  };

  const handleRisk = (e) => {
    switch(e.target.value){
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
  }

  const handleRows = (e) => {
    setRows(Number(e.target.value));
  } 
  
  const handleNumOfAutoBets = (e) => {
    setNumOfAutoBets(e.target.value);
  }

  const handleBalance = (bal) => {
    setBalance(bal);
  }
  
  return (
    <div>
      <Balance
        handleBalance={handleBalance}
        balance={balance} />
      <Menu
        handleAutoBet={handleAutoBet}
        handleBetAmount={handleBetAmount}
        autoBet={autoBet}
        handleRisk={handleRisk}
        handleRows={handleRows}
        handleNumOfAutoBets={handleNumOfAutoBets}
      />
      <Pyramid numOfRows={rows} />
    </div>
  );
}

export default App;
