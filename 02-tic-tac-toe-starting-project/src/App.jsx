import { useState } from "react";
import PlayerMain from "./components/PlayerMain";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import { WINNING_COMBINATIONS } from "./utils/winning-combinations.js";
import GameOver from "./components/GameOver.jsx";
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, playerSym } = turn;
    const { row, col } = square;

    gameBoard[row][col] = playerSym;
  }
  return gameBoard;
}

function handleActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].playerSym === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveWinner(gameBoard, playerNames) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerNames[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [playerNames, setPlayerNames] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  
  const activePlayer = handleActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, playerNames);
  const isDraw = gameTurns.length === 9 && !winner;

  function handleSymbolChange(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const activePlayer = handleActivePlayer(prevTurn);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          playerSym: activePlayer,
        },
        ...prevTurn,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerMain
            initialName="Player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <PlayerMain
            initialName="Player 2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSymbolChange} board={gameBoard} />
      </div>
      <Logs turnLog={gameTurns} />
    </main>
  );
}

export default App;
