import React, { useState } from "react";
import "./Card.css";
import { getRandomCoordinate } from "../../Utils/getRandomCoordinate.tsx";

const Card = () => {
  const [active, setActive] = useState(true);
  const [coordinate, setCoordinate] = useState(getRandomCoordinate());

  const clickHandler = () => {
    setActive(!active);
    active ? setCoordinate("?") : setCoordinate(getRandomCoordinate());
    return;
  };

  return (
    <div className="cardContainer" onClick={clickHandler}>
      <div className="textContainer">
        <span className="cardText">{coordinate}</span>
      </div>
    </div>
  );
};

export default Card;
