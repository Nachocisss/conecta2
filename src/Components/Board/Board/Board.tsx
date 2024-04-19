import React from "react";
import BoardCell from "../../Cells/BoardCell/BoardCell.tsx";
import "./Board.css";
import CoordinatesCell from "../../Cells/CoordinatesCells/CoordinatesCell.tsx/CoordinatesCell.tsx";
import ImageCell from "../../Cells/ImageCell/ImageCell.tsx";

const letters = ["A", "B", "C", "D", "E"];

const row = (rowNumber: number) => {
  const cell = [];
  for (let i = 1; i < 6; i++) {
    cell.push(<BoardCell tag={rowNumber + i} />);
  }
  return (
    <div className="boardRow">
      <CoordinatesCell tag={rowNumber} />
      {cell}
    </div>
  );
};

const firstCoordinatesRow = () => {
  const firtsRow = [];
  for (let i = 0; i < 6; i++) {
    firtsRow.push(<CoordinatesCell tag={i} isDummy={i === 0} />);
  }
  return <div className="boardRow">{firtsRow}</div>;
};
const firstImagesRow = () => {
  const firtsImageRow = [];
  for (let i = 0; i < 6; i++) {
    firtsImageRow.push(<ImageCell tag={i} loadImage={false} />);
  }
  return <div className="boardRow">{firtsImageRow}</div>;
};

const Board = () => {
  const columnsAndRows = () => {
    const board = [firstCoordinatesRow(), firstImagesRow()];
    for (let j = 0; j < 5; j++) {
      board.push(row(letters[j]));
    }
    return board;
  };

  return columnsAndRows();
};

export default Board;
