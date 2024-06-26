import { cellStatus } from "./gameStatus.tsx";

const letters = ["A", "B", "C", "D", "E"];

const createCoordinatesObject = () => {
  const numbers = ["1", "2", "3", "4", "5"];
  const coordinates = {};

  letters.forEach((letter) => {
    numbers.forEach((number) => {
      const coordinate = letter + number;
      coordinates[coordinate] = cellStatus.avaliable;
    });
  });

  return coordinates;
};

export { createCoordinatesObject };
