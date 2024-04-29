import React from "react";
import Board from "../../Components/Board/Board.tsx";
import "./BoardScreen.css";
import { useCoordinate } from "../../Contexts/CoordinatesContext.tsx";
import { gameStatus, messageStatus } from "../../Utils/gameStatus.tsx";
import messages from "../../Utils/messages.json";

const BoardScreen = () => {
  const { isGuessing, screenMessage } = useCoordinate();
  const localisGuessing = isGuessing === gameStatus.guessing;
  const isStart = screenMessage.status === messageStatus.start;

  const textStart = (
    <h2 className={`boardTextINFO`}>
      {messages.board.startInstructions.map((text) => {
        return <p className="startText">{text}</p>;
      })}
    </h2>
  );
  return (
    <div className={localisGuessing ? "boardScreen" : "boardScreenNotGuessing"}>
      {!localisGuessing && (
        <div className="boardTextContainer">
          <h2 className={`boardText${screenMessage.status}`}>
            {screenMessage.message}
          </h2>
          {isStart && textStart}
        </div>
      )}
      <Board />
    </div>
  );
};

export default BoardScreen;
