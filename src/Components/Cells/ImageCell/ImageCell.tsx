import React from "react";
import "./ImageCell.css";

const ImageCell = (props) => {
  return (
    <div className="imageCellContainer">
      {props.loadImage && (
        <img src="https://picsum.photos/200/300?random=1" alt="img" />
      )}
      <span> lda</span>
    </div>
  );
};
export default ImageCell;
