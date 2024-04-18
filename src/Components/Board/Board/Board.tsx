import React from "react";
import BoardCell from "../BoardCell/BoardCell.tsx";
import "./Board.css";

const letters = ["A", "B", "C", "D", "E"];
const Board = () => {
  const row = (rowNumber: number) => {
    const cell = [];
    for (let i = 1; i < 6; i++) {
      cell.push(<BoardCell tag={rowNumber + i} />);
    }
    return <div className="boardRow">{cell}</div>;
  };
  const board = [];
  for (let j = 0; j < 5; j++) {
    board.push(row(letters[j]));
  }
  return <div>{board}</div>;
};

export default Board;
