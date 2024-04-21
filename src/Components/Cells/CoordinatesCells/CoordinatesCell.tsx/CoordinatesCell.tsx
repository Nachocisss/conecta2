import React from "react";
import "./CoordinatesCell.css";
import useGetCardWidth from "../../../../Hooks/useGetCardWidth.tsx";

const CoordinatesCell = (props) => {
  const { isWidth, width, height } = useGetCardWidth();
  const cardStyle = isWidth ? { width: width } : { height: height };
  return (
    <div
      className={props.isDummy ? "CoordinatesDummyCell" : "CoordinatesCell"}
      style={cardStyle}
    >
      {!props.isDummy && <span>{props.tag}</span>}
      {props.loadImage && (
        <img src="https://picsum.photos/200/300?random=10" alt="img" />
      )}
    </div>
  );
};
export default CoordinatesCell;
