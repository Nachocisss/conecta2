import React, { createContext, useState, useContext, useEffect } from "react";
import { createCoordinatesObject } from "../Utils/createCoordinatesObject.tsx";
import { cellStatus, gameStatus, messageStatus } from "../Utils/gameStatus.tsx";
import texts from "../Utils/messages.json";
import { generate } from "random-words";
import defaultWords from "../Utils/defaultWords.tsx";

const CoordinatesContext = createContext({
  coordinates: {},
  currentCoord: "",
  isGuessing: gameStatus.waiting,
  generateRamdomCoordinate: () => {},
  guessCoordinate: (number) => {},
  startGuessing: () => {},
  turn: 0,
  scores: [0, 0],
  screenMessage: {
    message: `${texts.board.start}`,
    status: messageStatus.start,
  },
  words: defaultWords(),
});

export const CoordinatesProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(createCoordinatesObject());
  const [currentCoord, setCurrentCoord] = useState("");
  const [turn, setTurn] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [isGuessing, setIsGuessing] = useState(gameStatus.waiting);
  const [screenMessage, setScreenMessage] = useState({
    message: `${texts.board.start}`,
    status: messageStatus.start,
  });
  const [words, setWords] = useState([""]);
  const SPACES_TO_END_GAME = 5;

  useEffect(() => {
    const generatedWords = generate(10);
    if (Array.isArray(generatedWords)) {
      setWords(generatedWords);
    } else {
      setWords(defaultWords());
    }
  }, []);

  const otherTeam = turn === 0 ? 1 : 0;

  const changeTurn = () => {
    setIsGuessing(gameStatus.waiting);
    setTurn(otherTeam);
  };

  const onlyAvaliablesCoordinates = () => {
    return Object.entries(coordinates).filter(
      ([_c, status]) => status === cellStatus.avaliable
    );
  };

  const startGuessing = () => {
    setIsGuessing(gameStatus.guessing);
  };

  const generateRamdomCoordinate = () => {
    const avaliableCoordinates = onlyAvaliablesCoordinates();
    const ramdomIndex = Math.floor(Math.random() * avaliableCoordinates.length);
    setCurrentCoord(avaliableCoordinates[ramdomIndex][0]);
    setIsGuessing(gameStatus.showing);
    setScreenMessage({
      message: texts.board.hide,
      status: messageStatus.info,
    });
  };

  const checkWinner = () => {
    const avaliablesNumber = onlyAvaliablesCoordinates().length;

    if (avaliablesNumber === SPACES_TO_END_GAME) {
      const winnerMessage = `Team ${
        scores[0] > scores[1] ? 1 : 2
      } is the Winner, Congrats!`;
      setScreenMessage({
        message: winnerMessage,
        status: messageStatus.end,
      });
      setIsGuessing(gameStatus.end);
    }
  };
  useEffect(() => {
    checkWinner();
  }, [scores]);

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
      setScreenMessage({
        message: `${texts.board.good}${turn + 1}`,
        status: messageStatus.correct,
      });
    } else {
      setScreenMessage({
        message: `${texts.board.ups} ${otherTeam + 1}`,
        status: messageStatus.wrong,
      });
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
        words,
      }}
    >
      {children}
    </CoordinatesContext.Provider>
  );
};

export const useCoordinate = () => {
  return useContext(CoordinatesContext);
};
