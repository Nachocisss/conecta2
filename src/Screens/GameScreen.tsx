import React from "react";
import "./Screens.css";
import BoardScreen from "./BoardScreen/BoardScreen.tsx";
import CardScreen from "./CardScreen.tsx";

const GameScreen = () => {
  return (
    <div className="App">
      <BoardScreen />
      <CardScreen />
    </div>
  );
};

export default GameScreen;
