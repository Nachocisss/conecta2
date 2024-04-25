import React from "react";
import "./BoardCell.css";
import { useCoordinate } from "../../../Contexts/CoordinatesContext.tsx";
import { cellStatus } from "../../../Utils/gameStatus.tsx";

const BoardCell = (props) => {
  const { coordinates, guessCoordinate } = useCoordinate();
  const coordinateString = props.tag;
  const coorPressable = coordinates[coordinateString] === cellStatus.avaliable;

  return (
    <div
      className="boardCell"
      onClick={
        coorPressable ? () => guessCoordinate(coordinateString) : () => {}
      }
    >
      <span>{coordinateString}</span>
      {!coorPressable && (
        <span> punto de team: {coordinates[coordinateString] + 1}</span>
      )}
    </div>
  );
};
export default BoardCell;
