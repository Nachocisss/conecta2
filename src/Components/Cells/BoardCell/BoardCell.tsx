import React from "react";
import "./BoardCell.css";
import { useCoordinate } from "../../../Contexts/CoordinatesContext.tsx";

const BoardCell = (props) => {
  const { coordinates, toggleCoordinates } = useCoordinate();
  const coordinateString = props.tag;

  return (
    <div
      className="boardCell"
      onClick={() => toggleCoordinates(coordinateString)}
    >
      <span>{coordinateString}</span>
      {coordinates[coordinateString] && <span> apretado</span>}
    </div>
  );
};
export default BoardCell;
