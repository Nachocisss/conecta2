import React from "react";
import "./Card.css";
import { useCoordinate } from "../../Contexts/CoordinatesContext.tsx";
import { gameStatus } from "../../Utils/gameStatus.tsx";
import texts from "../../Utils/messages.json";

const Card = () => {
  const {
    generateRamdomCoordinate,
    isGuessing,
    startGuessing,
    currentCoord,
    turn,
  } = useCoordinate();
  const localisGuessing = isGuessing === gameStatus.guessing;
  const localIsShowing = isGuessing === gameStatus.showing;
  const localIsWaiting = isGuessing === gameStatus.waiting;

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
      onClick={localisGuessing ? () => {} : clickHandler}
    >
      <div className="textContainer">
        {!localisGuessing && (
          <>
            <span className="cardText">
              {localIsShowing ? currentCoord : "?"}
            </span>
            <span className="cardTextSubtitle">
              {localIsWaiting ? texts.card.pickUp : texts.card.hide}
            </span>
          </>
        )}
        {localisGuessing && (
          <>
            <span className="cardTextSubtitle">{`Team ${turn + 1}`}</span>
            <span className="cardTextSubtitle">{texts.card.guess}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
