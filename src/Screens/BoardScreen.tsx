import React from "react";
import Board from "../Components/Board/Board/Board.tsx";
import "./Screens.css";
import { useCoordinate } from "../Contexts/CoordinatesContext.tsx";

const BoardScreen = () => {
  const { isGuessing } = useCoordinate();
  return (
    <div className={isGuessing ? "boardScreen" : "boardScreenNotGuessing"}>
      <Board />
    </div>
  );
};

export default BoardScreen;
