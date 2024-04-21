import React from "react";
import "./Screens.css";
import BoardScreen from "./BoardScreen.tsx";
import CardScreen from "./CardScreen.tsx";
import { createCoordinatesObject } from "../Utils/getRandomCoordinate.tsx";

const GameScreen = () => {
  const coordinatesObject = createCoordinatesObject();
  return (
    <div className="App">
      <BoardScreen coordinatesObject={coordinatesObject} />
      <CardScreen coordinatesObject={coordinatesObject} />
    </div>
  );
};

export default GameScreen;
