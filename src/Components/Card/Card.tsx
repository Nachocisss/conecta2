import React, { useState } from "react";
import "./Card.css";
import { useCoordinate } from "../../Contexts/CoordinatesContext.tsx";

const Card = () => {
  const { generateRamdomCoordinate, isGuessing, startGuessing, currentCoord } =
    useCoordinate();
  const [showCard, setShowCard] = useState(false);

  const clickHandler = () => {
    if (showCard) {
      startGuessing();
      setShowCard(false);
    } else {
      generateRamdomCoordinate();
      setShowCard(true);
    }
  };

  return (
    <div
      className="cardContainer"
      onClick={isGuessing ? () => console.log(currentCoord) : clickHandler}
    >
      <div className="textContainer">
        <span className="cardText">{showCard ? currentCoord : "?"}</span>
      </div>
    </div>
  );
};

export default Card;
