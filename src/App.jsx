import Player from "./components/Player/Player";
import Gameboard from "./components/Gameboard/Gameboard";
import { useState } from "react";
import Log from "./components/Log/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [acticePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer, },
        ...prevTurns,
      ];
      return updatedTurns
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={"Player 1"}
            symbol={"X"}
            isActive={acticePlayer === "X"}
          ></Player>
          <Player
            initialName={"Player 2"}
            symbol={"O"}
            isActive={acticePlayer === "O"}
          ></Player>
        </ol>
        <Gameboard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        ></Gameboard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  );
}

export default App;
