import React from "react";
import Board from "../../Components/Board/Board/Board.tsx";
import "./BoardScreen.css";
import { useCoordinate } from "../../Contexts/CoordinatesContext.tsx";
import gameStatus from "../../Utils/gameStatus.tsx";

const BoardScreen = () => {
  const { isGuessing } = useCoordinate();
  const localisGuessing = isGuessing === gameStatus.guessing;
  console.log(!localisGuessing);

  return (
    <div className={localisGuessing ? "boardScreen" : "boardScreenNotGuessing"}>
      {!localisGuessing && (
        <div className="boardTextContainer">
          <h2 className="boardText">Try a new card!</h2>
        </div>
      )}
      <Board />
    </div>
  );
};

export default BoardScreen;
