import React from "react";
import "./BoardCell.css";
import { useCoordinate } from "../../../Contexts/CoordinatesContext.tsx";

const BoardCell = (props) => {
  const { coordinates, guessCoordinate } = useCoordinate();
  const coordinateString = props.tag;

  return (
    <div
      className="boardCell"
      onClick={() => guessCoordinate(coordinateString)}
    >
      <span>{coordinateString}</span>
      {coordinates[coordinateString] && <span> apretado</span>}
    </div>
  );
};
export default BoardCell;
