import React from "react";
import "./CoordinatesCell.css";

const CoordinatesCell = (props) => {
  return (
    <div className={props.isDummy ? "CoordinatesDummyCell" : "CoordinatesCell"}>
      {!props.isDummy && <span>{props.tag}</span>}
      {props.loadImage && (
        <img src="https://picsum.photos/200/300?random=10" alt="img" />
      )}
    </div>
  );
};
export default CoordinatesCell;
