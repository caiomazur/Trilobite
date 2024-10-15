import React, { useEffect, useState } from 'react';

const Snake = () => {
  const [snake, setSnake] = useState([[5, 5]]); // Snake's position as an array of coordinates
  const [direction, setDirection] = useState('RIGHT');
  const [board, setBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(0)) // Creating a 10x10 grid filled with zeros
  );

  useEffect(() => {
    // Function to handle keydown events
    const handleKeyDown = (event: { key: any; }) => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    // Add event listener on component mount
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction]); // Dependency array includes direction to ensure it's the latest

  return (
    <div className="grid grid-cols-10 gap-1 bg-black p-4">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          // Initialize a flag to determine if the current cell is part of the snake
          let isSnake = false;

          // Loop through each segment of the snake
          for (let i = 0; i < snake.length; i++) {
            // Check if the current cell matches the current segment of the snake
            if (snake[i][0] === rowIndex && snake[i][1] === colIndex) {
              isSnake = true; // If there's a match, set isSnake to true
              break; // Exit the loop early since we found a match
            }
          }

          // Render the cell with the appropriate background color
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-8 h-8 border border-gray-800 ${isSnake ? 'bg-green-500' : 'bg-gray-700'}`}
            >
              {/* This div represents a single cell on the board */}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Snake;
