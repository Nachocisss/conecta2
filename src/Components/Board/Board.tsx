import BoardCell from "../Cells/BoardCell/BoardCell.tsx";
import "./Board.css";
import CoordinatesCell from "../Cells/CoordinatesCells/CoordinatesCell.tsx/CoordinatesCell.tsx";
import { useCoordinate } from "../../Contexts/CoordinatesContext.tsx";
import { firstRowCreator, rowCreator, wordRowCreator } from "./RowsRender.tsx";

const Board = () => {
  const { words } = useCoordinate();

  const board = [firstRowCreator(CoordinatesCell), wordRowCreator(words)];
  for (let rowNumber = 0; rowNumber < 5; rowNumber++) {
    board.push(rowCreator(BoardCell, rowNumber, words));
  }
  return board;
};

export default Board;
