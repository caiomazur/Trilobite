import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const TicTac = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  // Handle computer's (PC's) turn
  useEffect(() => {
    let timeoutId: number | undefined;
    // Checks if it's the computer's turn ("O")
    if (turn === "O") {
      timeoutId = setTimeout(pcTurn, 500); // Store the timeout ID for later cleanup
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId); // Clear the timeout if the component unmounts or if the effect runs again
    };
  }, [turn]); // Effect depends on turn

  const winCheck = () => {
    
  };

  const pcTurn = () => {
    // Identifies empty cells by iterating over the board and collecting indexes of empty cells
    let emptyIndexes = board.reduce((acc, cell, index) => {
      if (cell === null) acc.push(index); // If cell is empty, index is added to accumulator
      return acc;
    }, []);

    // Checks if there are any empty cells to play
    if (emptyIndexes.length > 0) {
      // Selects a random index from the array of empty cell indexes
      const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
      const selectedIndex = emptyIndexes[randomIndex];
      const newBoard = [...board]; // Creates a copy of the current board
      newBoard[selectedIndex] = "O"; // Marks the selected cell with "O"
      setBoard(newBoard); // Updates the board state with the new board
      setTurn("X"); // Switches the turn back to the player "X"
    }
  };

  const handleClick = (index: number) => {
    if (board[index]) return; // Prevents marking an already taken cell

    const newBoard = [...board]; // Copies the current board
    newBoard[index] = "X"; // Marks the clicked cell with "X", representing player's move
    setBoard(newBoard); // Updates the board with the new state
    setTurn("O"); // Switches the turn to the computer
  };

  return (
    <div>
      <div className="w-[400px] h-[400px] bg-black grid grid-cols-3 rounded-lg">
        {/* Maps over the board state to render cells, passing click handlers and cell types */}
        {board.map((cell, index) => (
          <Cell key={index} type={cell} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        className="bg-gray-800 w-[400px] h-12 rounded-lg border-4 border-white border-double mt-2 shadow-lg flex items-center justify-center"
        onClick={() => {
          setBoard(Array(9).fill(null)); // Resets the board to its initial state
          setTurn("X"); // Also reset the turn to "X" so the game can start fresh
        }}
      >
        <p className="text-[32px] text-center text-white font-bold">Restart</p>
      </button>
    </div>
  );
};

export default TicTac;
