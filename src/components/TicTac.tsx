import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const TicTac = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState<string>("X");
  const [whoWin, setWhoWin] = useState<string>("");
  const [score, setScore] = useState<{ playerX: number; playerO: number }>({
    playerX: 0,
    playerO: 0,
  });

  useEffect(() => {
    // Handle computer's turn
    let timeoutId: number | undefined;
    if (turn === "O" && !whoWin) {
      timeoutId = setTimeout(pcTurn, 500);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [turn, board]); // Now also depends on board to ensure it updates after board state changes

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

    let boardFull = true; // Assume the board is full

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
      setWhoWin("It's a draw!"); // Set draw message if no winner and board is full
    }
  };

  const pcTurn = () => {
    let emptyIndexes = board.reduce((acc: number[], cell, index) => {
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
      <div className="w-[400px] h-[400px] bg-black grid grid-cols-3 rounded-lg">
        {board.map((cell, index) => (
          <Cell key={index} type={cell} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        className="bg-gray-800 w-[400px] h-12 rounded-lg border-4 border-white border-double mt-2 py-4 shadow-lg flex items-center justify-center"
        onClick={() => {
          setBoard(Array(9).fill(""));
          setTurn("X");
          setWhoWin("");
        }}
      >
        <p className="font-poppins text-[28px] text-center text-white font-semibold">
          Restart
        </p>
      </button>

      <div className="bg-gray-800 w-[400px] h-12 rounded-lg border-4 border-white border-double mt-2 py-4 shadow-lg flex items-center justify-center">
        <p className="font-poppins text-[26px] text-center text-white font-semibold">
          Player X: {score.playerX} | Player O: {score.playerO}
        </p>
      </div>

      {whoWin && (
        <div className="absolute left-[50%] ml-[-200px] top-[55%] mt-[-100px] w-[400px] h-32 rounded-lg border-4 border-white border-double shadow-lg flex items-center justify-center animate-combinedBg">
          <p className="h-16 text-[36px] text-center text-white font-bold animate-combined">
            {whoWin}
          </p>
        </div>
      )}
    </div>
  );
};

export default TicTac;
