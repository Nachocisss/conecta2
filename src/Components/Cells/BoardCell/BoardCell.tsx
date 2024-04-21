import React from "react";
import "./BoardCell.css";
import useGetCardWidth from "../../../Hooks/useGetCardWidth.tsx";

const BoardCell = (props) => {
  const { isWidth, width, height } = useGetCardWidth();
  const cardStyle = isWidth ? { width: width } : { height: height };
  return (
    <div className="boardCell" style={cardStyle}>
      <span>{props.tag}</span>
    </div>
  );
};
export default BoardCell;
