import React, { useState, useEffect } from "react";

interface Point {
  x: number;
  y: number;
}

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const Snake: React.FC = () => {
  const [snake, setSnake] = useState<Point[]>([
    { x: 10, y: 10 },
    { x: 10, y: 11 },
  ]);
  const [food, setFood] = useState<Point>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>("UP");
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const generateFood = (): Point => {
    return {
      x: Math.floor(Math.random() * 20),
      y: Math.floor(Math.random() * 20),
    };
  };

  const handleKeyPress = (e: globalThis.KeyboardEvent): void => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp":
        if (direction !== "DOWN") setDirection("UP");
        break;
      case "ArrowDown":
        if (direction !== "UP") setDirection("DOWN");
        break;
      case "ArrowLeft":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case "ArrowRight":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
      default:
        break;
    }
  };

  const handleDirectionChange = (newDirection: Direction) => {
    if (
      (newDirection === "UP" && direction !== "DOWN") ||
      (newDirection === "DOWN" && direction !== "UP") ||
      (newDirection === "LEFT" && direction !== "RIGHT") ||
      (newDirection === "RIGHT" && direction !== "LEFT")
    ) {
      setDirection(newDirection);
    }
  };

  useEffect(() => {
    const keyPressHandler = (e: globalThis.KeyboardEvent) => handleKeyPress(e);
    document.addEventListener("keydown", keyPressHandler);
    return () => document.removeEventListener("keydown", keyPressHandler);
  }, [direction]);

  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };

        switch (direction) {
          case "UP":
            head.y -= 1;
            break;
          case "DOWN":
            head.y += 1;
            break;
          case "LEFT":
            head.x -= 1;
            break;
          case "RIGHT":
            head.x += 1;
            break;
          default:
            break;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        if (head.x < 0 || head.y < 0 || head.x >= 20 || head.y >= 20) {
          setIsGameOver(true);
        }

        for (let i = 1; i < newSnake.length; i++) {
          if (newSnake[i].x === head.x && newSnake[i].y === head.y) {
            setIsGameOver(true);
          }
        }

        return newSnake;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [direction, food, isGameOver]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
      <main className="w-[300px] sm:w-[600px] h-[425px] bg-black border-2 border-white border-double relative">
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute w-5 h-5 bg-green-500"
            style={{
              left: `${segment.x * 5}%`,
              top: `${segment.y * 5}%`,
            }}
          ></div>
        ))}
        <div
          className="absolute w-5 h-5 bg-red-500"
          style={{
            left: `${food.x * 5}%`,
            top: `${food.y * 5}%`,
          }}
        ></div>
        {isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-2xl">
            Game Over
          </div>
        )}
      </main>
      <div className="flex flex-col items-center mt-4 space-y-2">
        <button
          onClick={() => handleDirectionChange("UP")}
          className="bg-gray-700 text-white p-4 rounded"
        >
          Up
        </button>
        <div className="flex space-x-4">
          <button
            onClick={() => handleDirectionChange("LEFT")}
            className="bg-gray-700 text-white p-4 rounded"
          >
            Left
          </button>
          <button
            onClick={() => handleDirectionChange("RIGHT")}
            className="bg-gray-700 text-white p-4 rounded"
          >
            Right
          </button>
        </div>
        <button
          onClick={() => handleDirectionChange("DOWN")}
          className="bg-gray-700 text-white p-4 rounded"
        >
          Down
        </button>
      </div>
    </div>
  );
};

export default Snake;
