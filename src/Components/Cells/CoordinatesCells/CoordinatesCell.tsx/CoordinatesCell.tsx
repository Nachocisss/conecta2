import React from "react";
import "./CoordinatesCell.css";

const CoordinatesCell = (props) => {
  return (
    <div className={props.isDummy ? "CoordinatesDummyCell" : "CoordinatesCell"}>
      {!props.isDummy && (
        <span className="CoordinatesCellText">{props.tag}</span>
      )}
    </div>
  );
};
export default CoordinatesCell;
