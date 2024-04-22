import React from "react";
import BoardCell from "../../Cells/BoardCell/BoardCell.tsx";
import "./Board.css";
import CoordinatesCell from "../../Cells/CoordinatesCells/CoordinatesCell.tsx/CoordinatesCell.tsx";
import { useCoordinate } from "../../../Contexts/CoordinatesContext.tsx";

const letters = ["A", "B", "C", "D", "E"];

const dummyCell = <CoordinatesCell tag={""} isDummy={true} />;

const rowCreator = (isFirstRow, Component, rawNumber = "") => {
  const row = isFirstRow ? [dummyCell, dummyCell] : [];
  for (let i = 1; i < 6; i++) {
    const tag = isFirstRow ? i : rawNumber + i;
    row.push(<Component tag={tag} />);
  }
  return (
    <div className="boardRow">
      {!isFirstRow && (
        <>
          <CoordinatesCell tag={rawNumber} />
          <CoordinatesCell tag={"i"} />
        </>
      )}
      {row}
    </div>
  );
};

const Board = () => {
  const board = [
    rowCreator(true, CoordinatesCell),
    rowCreator(true, CoordinatesCell),
  ];
  for (let rawNumber = 0; rawNumber < 5; rawNumber++) {
    board.push(rowCreator(false, BoardCell, letters[rawNumber]));
  }
  return board;
};

export default Board;
