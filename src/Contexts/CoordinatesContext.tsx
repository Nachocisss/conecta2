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
  turn: 0,
  scores: [0, 0],
});

export const CoordinatesProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(createCoordinatesObject());
  const [currentCoord, setCurrentCoord] = useState("");
  const [turn, setTurn] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [isGuessing, setIsGuessing] = useState(gameStatus.waiting);

  const changeTurn = () => {
    setTurn(turn === 0 ? 1 : 0);
  };

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
      setScores((prevScores) => {
        const updatedScores = { ...prevScores };
        const team = turn ? 0 : 1;
        console.log(updatedScores);

        updatedScores[team] += 1;
        return updatedScores;
      });
    } else {
      console.log("nones");
    }
    setCurrentCoord("?");
    changeTurn();
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
        turn,
        scores,
      }}
    >
      {children}
    </CoordinatesContext.Provider>
  );
};

export const useCoordinate = () => {
  return useContext(CoordinatesContext);
};
