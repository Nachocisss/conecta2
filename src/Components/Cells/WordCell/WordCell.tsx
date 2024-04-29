import React from "react";
import "./WordCell.css";
const WordCell = (props) => {
  return (
    <div
      className={
        props.isDummy
          ? "wordDummyCellContainer"
          : props.rotate
          ? "wordCellContainerVertical"
          : "wordCellContainer"
      }
    >
      <span className="wordCellText">{props.word}</span>
    </div>
  );
};

export default WordCell;
