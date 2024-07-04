import { useEffect, useState } from "react";
import Cell from "./Cell";

interface Move {
  index: number;
  score: number;
}

const TicTac: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState<string>("X");
  const [whoWin, setWhoWin] = useState<string>("");
  const [score, setScore] = useState<{ playerX: number; playerO: number }>({
    playerX: 0,
    playerO: 0,
  });
  const [difficulty, setDifficulty] = useState<"easy" | "hard">("easy");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (turn === "O" && !whoWin) {
      timeoutId = setTimeout(pcTurn, 500);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [turn, board]);

  const winCheck = (currentBoard: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    let boardFull = true;

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        const winner = currentBoard[a];
        setWhoWin(winner === "X" ? "Player X wins!" : "Player O wins!");
        setScore((prevScore) => ({
          ...prevScore,
          playerX: winner === "X" ? prevScore.playerX + 1 : prevScore.playerX,
          playerO: winner === "O" ? prevScore.playerO + 1 : prevScore.playerO,
        }));
        return;
      }
      if (!currentBoard[a] || !currentBoard[b] || !currentBoard[c]) {
        boardFull = false; // If any cell is empty, the board is not full
      }
    }

    if (boardFull) {
      setWhoWin("It's a draw!");
    }
  };

  const minimax = (newBoard: string[], player: string): Move => {
    const availSpots = newBoard.reduce<number[]>((acc, cell, index) => {
      if (cell === "") acc.push(index);
      return acc;
    }, []);

    if (checkWin(newBoard, "X")) {
      return { index: -1, score: -10 };
    } else if (checkWin(newBoard, "O")) {
      return { index: -1, score: 10 };
    } else if (availSpots.length === 0) {
      return { index: -1, score: 0 };
    }

    const moves: Move[] = [];
    for (let i = 0; i < availSpots.length; i++) {
      const move: Move = { index: availSpots[i], score: 0 };
      newBoard[availSpots[i]] = player;

      if (player === "O") {
        const result = minimax(newBoard, "X");
        move.score = result.score;
      } else {
        const result = minimax(newBoard, "O");
        move.score = result.score;
      }

      newBoard[availSpots[i]] = "";
      moves.push(move);
    }

    let bestMove: Move = moves[0];
    if (player === "O") {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    }

    return bestMove;
  };

  const checkWin = (board: string[], player: string) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] === player && board[b] === player && board[c] === player) {
        return true;
      }
    }
    return false;
  };

  const pcTurn = () => {
    if (difficulty === "easy") {
      easyPcTurn();
    } else {
      hardPcTurn();
    }
  };

  const easyPcTurn = () => {
    let emptyIndexes = board.reduce<number[]>((acc, cell, index) => {
      if (cell === "") acc.push(index);
      return acc;
    }, []);

    if (emptyIndexes.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
      const selectedIndex = emptyIndexes[randomIndex];
      const newBoard = [...board];
      newBoard[selectedIndex] = "O";
      setBoard(newBoard);
      setTurn("X");
      winCheck(newBoard);
    }
  };

  const hardPcTurn = () => {
    const bestMove = minimax(board, "O");
    const newBoard = [...board];
    newBoard[bestMove.index] = "O";
    setBoard(newBoard);
    setTurn("X");
    winCheck(newBoard);
  };

  const handleClick = (index: number) => {
    if (board[index] === "" && !whoWin) {
      const newBoard = [...board];
      newBoard[index] = "X";
      setBoard(newBoard);
      setTurn("O");
      winCheck(newBoard);
    }
  };

  return (
    <div>
      <div className="bg-gray-800 w-[350px] sm:w-[400px] h-16 sm:h-20 mt-4 rounded-lg border-4 border-white border-double shadow-lg flex justify-center items-center">
        <h1 className="font-poppins text-[28px] sm:text-[38px] text-center text-white font-bold">
          Trilo Tac Toe
        </h1>
      </div>
      <div className="flex justify-between items-center my-2">
        <button
          className={`mr-4 bg-gray-800 w-[116px] sm:w-[133px] h-12 rounded-lg border-4 border-white border-double shadow-lg flex items-center justify-center ${
            difficulty === "easy" ? "bg-green-600" : ""
          }`}
          onClick={() => setDifficulty("easy")}
        >
          <p className="font-poppins text-[18px] sm:text-[22px] text-center text-white font-semibold">
            Easy
          </p>
        </button>
        <button
          className={`bg-gray-800 w-[116px] sm:w-[133px] h-12 rounded-lg border-4 border-white border-double shadow-lg flex items-center justify-center ${
            difficulty === "hard" ? "bg-green-600" : ""
          }`}
          onClick={() => setDifficulty("hard")}
        >
          <p className="font-poppins text-[18px] sm:text-[22px] text-center text-white font-semibold">
            Hard
          </p>
        </button>
      </div>
      <div className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] bg-black grid grid-cols-3 rounded-lg">
        {board.map((cell, index) => (
          <Cell key={index} type={cell} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        className="bg-gray-800 w-[350px] sm:w-[400px] h-12 sm:h-14 rounded-lg border-4 border-white border-double mt-2 py-4 shadow-lg flex items-center justify-center"
        onClick={() => {
          setBoard(Array(9).fill(""));
          setTurn("X");
          setWhoWin("");
        }}
      >
        <p className="font-poppins text-[24px] sm:text-[28px] text-center text-white font-semibold">
          Restart
        </p>
      </button>

      <div className="bg-gray-800 w-[350px] sm:w-[400px] h-12 sm:h-14 rounded-lg border-4 border-white border-double mt-2 py-4 shadow-lg flex items-center justify-center">
        <p className="font-poppins text-[20px] sm:text-[28px] text-center text-white font-semibold">
          Player X: {score.playerX} | Player O: {score.playerO}
        </p>
      </div>

      {whoWin && (
        <div className="absolute left-[56%] sm:left-[50%] ml-[-200px] top-[62%] mt-[-100px] w-[350px] sm:w-[400px] h-[116px] sm:h-32 rounded-lg border-4 border-white border-double shadow-lg flex items-center justify-center animate-combinedBg">
          <p className="h-16 text-[36px] text-center text-white font-bold animate-combined">
            {whoWin}
          </p>
        </div>
      )}
    </div>
  );
};

export default TicTac;
