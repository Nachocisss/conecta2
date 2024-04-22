import React from "react";
import "./Screens.css";
import BoardScreen from "./BoardScreen.tsx";
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
