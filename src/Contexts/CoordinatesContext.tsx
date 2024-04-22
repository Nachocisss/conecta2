import React, { createContext, useState, useContext } from "react";
import { createCoordinatesObject } from "../Utils/createCoordinatesObject.tsx";

const CoordinatesContext = createContext({
  coordinates: {},
  currentCoord: "?",
  isGuessing: false,
  generateRamdomCoordinate: () => {},
  guessCoordinate: (number) => {},
  startGuessing: () => {},
});

export const CoordinatesProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(createCoordinatesObject());
  const [currentCoord, setCurrentCoord] = useState("?");
  const [isGuessing, setIsGuessing] = useState(false);

  const generateRamdomCoordinate = () => {
    const avaliableCoordinates = Object.entries(coordinates).filter(
      ([_coordenada, estado]) => !estado
    );
    const ramdomIndex = Math.floor(Math.random() * avaliableCoordinates.length);
    setCurrentCoord(avaliableCoordinates[ramdomIndex][0]);
  };

  const startGuessing = () => {
    setIsGuessing(true);
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
    setIsGuessing(false);
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
