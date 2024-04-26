import React from "react";
import Board from "../../Components/Board/Board/Board.tsx";
import "./BoardScreen.css";
import { useCoordinate } from "../../Contexts/CoordinatesContext.tsx";
import { gameStatus } from "../../Utils/gameStatus.tsx";

const BoardScreen = () => {
  const { isGuessing, screenMessage } = useCoordinate();
  const localisGuessing = isGuessing === gameStatus.guessing;
  return (
    <div className={localisGuessing ? "boardScreen" : "boardScreenNotGuessing"}>
      {!localisGuessing && (
        <div className="boardTextContainer">
          <h2 className={`boardText${screenMessage.status}`}>
            {screenMessage.message}
          </h2>
        </div>
      )}
      <Board />
    </div>
  );
};

export default BoardScreen;
