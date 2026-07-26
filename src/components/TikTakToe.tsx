"use client";

import { useState, useCallback } from "react";

type Player = "X" | "O";
type CellValue = Player | null;
type Board = CellValue[];

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],             // diagonals
];

function checkWinner(board: Board): Player | null {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function isDraw(board: Board): boolean {
  return board.every((cell) => cell !== null);
}

export function TikTakToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");

  const winner = checkWinner(board);
  const draw = !winner && isDraw(board);
  const gameOver = winner !== null || draw;

  const handleClick = useCallback(
    (index: number) => {
      if (board[index] || gameOver) return;

      const next = [...board];
      next[index] = currentPlayer;
      setBoard(next);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    },
    [board, currentPlayer, gameOver],
  );

  const handleReset = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  }, []);

  const status = winner
    ? `Player ${winner} wins!`
    : draw
      ? "It's a draw!"
      : `Player ${currentPlayer}'s turn`;

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">Tik Tak Toe</h2>

      <div
        className={`text-lg font-semibold px-4 py-2 rounded-lg ${
          winner
            ? "text-green-800"
            : draw
              ? "text-yellow-800"
              : "text-gray-700"
        }`}
      >
        {status}
      </div>

      <div className="grid grid-cols-3 gap-2 bg-gray-300 p-2 rounded-xl">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            disabled={gameOver}
            className={`w-20 h-20 rounded-lg text-4xl font-bold
              flex items-center justify-center
              transition-all duration-150
              ${
                cell
                  ? "bg-white cursor-default"
                  : "bg-gray-100 hover:bg-gray-50 hover:scale-105 active:scale-95 cursor-pointer"
              }
              ${cell === "X" ? "text-blue-600" : "text-red-500"}
              ${gameOver ? "cursor-default" : ""}`}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={handleReset}
        className="px-6 py-2 bg-linear-120 from-[#dafdd1] to-[#ffb300] rounded-lg
                   font-semibold hover:opacity-90 active:scale-95 transition-all"
      >
        New Game
      </button>
    </div>
  );
}
