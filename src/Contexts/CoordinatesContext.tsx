import React, { createContext, useState, useContext } from "react";
import { createCoordinatesObject } from "../Utils/createCoordinatesObject.tsx";
import gameStatus from "../Utils/gameStatus.tsx";

const CoordinatesContext = createContext({
  coordinates: {},
  currentCoord: "",
  isGuessing: gameStatus.waiting,
  generateRamdomCoordinate: () => {},
  guessCoordinate: (number) => {},
  startGuessing: () => {},
});

export const CoordinatesProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(createCoordinatesObject());
  const [currentCoord, setCurrentCoord] = useState("");
  const [isGuessing, setIsGuessing] = useState(gameStatus.waiting);

  const generateRamdomCoordinate = () => {
    const avaliableCoordinates = Object.entries(coordinates).filter(
      ([_c, status]) => !status
    );
    const ramdomIndex = Math.floor(Math.random() * avaliableCoordinates.length);
    setCurrentCoord(avaliableCoordinates[ramdomIndex][0]);
    setIsGuessing(gameStatus.showing);
  };

  const startGuessing = () => {
    setIsGuessing(gameStatus.guessing);
  };

  const guessCoordinate = (coord) => {
    if (coord === currentCoord) {
      setCoordinates((prevCoord) => ({
        ...prevCoord,
        [coord]: true,
      }));
    } else {
      console.log("nones");
    }
    setCurrentCoord("?");
    setIsGuessing(gameStatus.waiting);
  };

  return (
    <CoordinatesContext.Provider
      value={{
        coordinates,
        guessCoordinate,
        isGuessing,
        currentCoord,
        generateRamdomCoordinate,
        startGuessing,
      }}
    >
      {children}
    </CoordinatesContext.Provider>
  );
};

export const useCoordinate = () => {
  return useContext(CoordinatesContext);
};
