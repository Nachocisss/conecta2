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

  const localIsGuessing = isGuessing === gameStatus.guessing;
  const localIsShowing = isGuessing === gameStatus.showing;
  const localIsWaiting = isGuessing === gameStatus.waiting;
  const endGame = isGuessing === gameStatus.end;

  const handleClick = () => {
    if (localIsShowing) {
      startGuessing();
    } else {
      generateRamdomCoordinate();
    }
  };

  const renderCardContent = () => {
    if (localIsGuessing) {
      return (
        <>
          <span className="cardTextSubtitle">{`Team ${turn + 1}`}</span>
          <span className="cardTextSubtitle">{texts.card.guess}</span>
        </>
      );
    } else if (!endGame) {
      return (
        <>
          <span className="cardText">
            {localIsShowing ? currentCoord : "?"}
          </span>
          <span className="cardTextSubtitle">
            {localIsWaiting ? texts.card.pickUp : texts.card.hide}
          </span>
        </>
      );
    }
    return <span className="cardText">End</span>;
  };

  return (
    <div
      className="cardContainer"
      onClick={!localIsGuessing && !endGame ? handleClick : undefined}
    >
      <div className="textContainer">{renderCardContent()}</div>
    </div>
  );
};

export default Card;
