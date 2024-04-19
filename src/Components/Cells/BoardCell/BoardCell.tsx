import React from "react";
import "./BoardCell.css";

const BoardCell = (props) => {
  return (
    <div className="boardCell">
      <span>{props.tag}</span>
    </div>
  );
};
export default BoardCell;
