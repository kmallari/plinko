import React from 'react'

const Manual = ({ randomTraverse }) => {
  // randomTraverse();
  return (
    <div>
      <button onClick={randomTraverse} className="bet-button">Bet</button>
    </div>
  )
}

export default Manual
