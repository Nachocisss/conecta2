import React, { createContext, useState, useContext } from "react";
import { createCoordinatesObject } from "../Utils/createCoordinatesObject.tsx";
import { cellStatus, gameStatus } from "../Utils/gameStatus.tsx";
import texts from "../Utils/messages.json";

const CoordinatesContext = createContext({
  coordinates: {},
  currentCoord: "",
  isGuessing: gameStatus.waiting,
  generateRamdomCoordinate: () => {},
  guessCoordinate: (number) => {},
  startGuessing: () => {},
  turn: 0,
  scores: [0, 0],
  screenMessage: `${texts.board.start}`,
});

export const CoordinatesProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(createCoordinatesObject());
  const [currentCoord, setCurrentCoord] = useState("");
  const [turn, setTurn] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [isGuessing, setIsGuessing] = useState(gameStatus.waiting);
  const [screenMessage, setScreenMessage] = useState(`${texts.board.start}`);

  const otherTeam = turn === 0 ? 1 : 0;

  const changeTurn = () => {
    setIsGuessing(gameStatus.waiting);
    setTurn(otherTeam);
  };

  const generateRamdomCoordinate = () => {
    const avaliableCoordinates = Object.entries(coordinates).filter(
      ([_c, status]) => status === cellStatus.avaliable
    );
    const ramdomIndex = Math.floor(Math.random() * avaliableCoordinates.length);
    setCurrentCoord(avaliableCoordinates[ramdomIndex][0]);
    setIsGuessing(gameStatus.showing);
    setScreenMessage(texts.board.hide);
  };

  const startGuessing = () => {
    setIsGuessing(gameStatus.guessing);
  };

  const guessCoordinate = (coord) => {
    if (coord === currentCoord) {
      setCoordinates((prevCoord) => ({
        ...prevCoord,
        [coord]: turn,
      }));
      setScores((prevScores) => {
        const updatedScores = { ...prevScores };
        updatedScores[turn] += 1;
        return updatedScores;
      });
      setScreenMessage(`${texts.board.good}}${turn + 1}`);
    } else {
      setScreenMessage(`${texts.board.ups} ${otherTeam + 1}`);
    }
    changeTurn();
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
        screenMessage,
      }}
    >
      {children}
    </CoordinatesContext.Provider>
  );
};

export const useCoordinate = () => {
  return useContext(CoordinatesContext);
};
