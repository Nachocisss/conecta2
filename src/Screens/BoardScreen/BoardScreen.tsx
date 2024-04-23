import React from "react";
import Board from "../../Components/Board/Board/Board.tsx";
import "./BoardScreen.css";
import { useCoordinate } from "../../Contexts/CoordinatesContext.tsx";

const BoardScreen = () => {
  const { isGuessing } = useCoordinate();
  return (
    <div className={isGuessing ? "boardScreen" : "boardScreenNotGuessing"}>
      {!isGuessing && (
        <div className="boardTextContainer">
          <h2 className="boardText">Try a new card!</h2>
        </div>
      )}
      <Board />
    </div>
  );
};

export default BoardScreen;
