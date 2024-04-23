import React from "react";
import BoardScreen from "./BoardScreen/BoardScreen.tsx";
import CardScreen from "./CardScreen/CardScreen.tsx";

const GameScreen = () => {
  return (
    <div className="App">
      <BoardScreen />
      <CardScreen />
    </div>
  );
};

export default GameScreen;
