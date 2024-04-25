import React from "react";
import "./Card.css";
import { useCoordinate } from "../../Contexts/CoordinatesContext.tsx";
import { gameStatus } from "../../Utils/gameStatus.tsx";

const Card = () => {
  const { generateRamdomCoordinate, isGuessing, startGuessing, currentCoord } =
    useCoordinate();
  const localisGuessing = isGuessing === gameStatus.guessing;
  const localIsShowing = isGuessing === gameStatus.showing;

  const clickHandler = () => {
    if (localIsShowing) {
      startGuessing();
    } else {
      generateRamdomCoordinate();
    }
  };

  return (
    <div
      className="cardContainer"
      onClick={localisGuessing ? () => console.log(currentCoord) : clickHandler}
    >
      <div className="textContainer">
        <span className="cardText">{localIsShowing ? currentCoord : "?"}</span>
      </div>
    </div>
  );
};

export default Card;
