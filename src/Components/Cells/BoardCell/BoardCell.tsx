import React from "react";
import "./BoardCell.css";
import { useCoordinate } from "../../../Contexts/CoordinatesContext.tsx";
import { cellStatus } from "../../../Utils/gameStatus.tsx";

const BoardCell = (props) => {
  const { coordinates, guessCoordinate } = useCoordinate();
  const coordinateString = props.tag;
  const coordAvaliable = coordinates[coordinateString] === cellStatus.avaliable;
  if (!coordAvaliable) {
    console.log(`boardCellTeam${coordinates[coordinateString] + 1}`, "aqui");
  }

  return (
    <div
      className={
        coordAvaliable
          ? "boardCell"
          : `boardCellTeam${coordinates[coordinateString] + 1}`
      }
      onClick={
        coordAvaliable ? () => guessCoordinate(coordinateString) : () => {}
      }
    >
      <span>{coordinateString}</span>
    </div>
  );
};
export default BoardCell;
