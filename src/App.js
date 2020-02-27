import React, { useState } from "react";
import "./App.css";
import { getPlays } from "./GetPlays";
import { ScoreBoard } from "./ScoreBoard";

function App() {
  const [plays, setPlays] = useState([]);
  const [typedRoll, setTypedRoll] = useState("");

  const roll = pins => {
    setPlays(getPlays([...plays], pins));
  };

  function clickToPlay() {
    const lastRoll = plays[plays.length - 1] || [];
    const limitAux = lastRoll.length === 1 ? lastRoll[0] : 0;
    const limit = 11 - limitAux;
    const random = Math.floor(Math.random() * limit);

    roll(random);
  }

  let hasNextRoll = false;
  const tenthRoll = plays[9];
  if (tenthRoll) {
    if (tenthRoll[0] + tenthRoll[1] === 10) {
      hasNextRoll = tenthRoll.length === 3;
    } else {
      hasNextRoll = tenthRoll.length === 2;
    }
  }

  function onTypedRolls(key) {
    if (hasNextRoll) {
      alert("Finish Bowling Game! Reset to play again");
      return;
    }
    let numberOfPins;
    if (key === "Enter") {
      numberOfPins = parseInt(typedRoll);
      setTypedRoll("");
      const prevRollAux = plays[plays.length - 1] || [];
      const prevRoll = prevRollAux.length === 1 ? prevRollAux[0] : 0;
      if (numberOfPins + prevRoll > 10) {
        alert("There are only 10 pins");
        return;
      }
      if (isNaN(numberOfPins) || numberOfPins > 10) {
        alert("Write a number between 0 and 10");
      } else {
        roll(numberOfPins);
      }
    }
  }

  function onChangeTyped(value) {
    const isNumber = /[0-9]/.test(value);
    if (isNumber) {
      setTypedRoll(value);
    }
  }

  function resetGame() {
    setTypedRoll("");
    setPlays([]);
  }

  return (
    <>
      <div>
        <button onClick={clickToPlay} disabled={hasNextRoll}>
          Click to Play
        </button>
        <button onClick={resetGame}>Reset</button>
        <div className="allPlays">
          {plays.map((play, idx) => (
            <ScoreBoard key={idx} play={play} index={idx} plays={plays} />
          ))}
        </div>
      </div>
      Write the play:
      <div>
        <input
          type="number"
          min="0"
          max="10"
          value={typedRoll}
          className="Typed-rolls"
          onKeyUp={event => onTypedRolls(event.key)}
          onChange={event => onChangeTyped(event.target.value)}
        />
      </div>
    </>
  );
}

export default App;
