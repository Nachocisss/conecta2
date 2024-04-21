const letters = ["A", "B", "C", "D", "E"];

const getRandomCoordinate = () => {
  const number = Math.floor(Math.random() * 5) + 1;
  const letter = letters[Math.floor(Math.random() * 5)];
  return letter + number;
};

const createCoordinatesObject = () => {
  const numbers = ["1", "2", "3", "4", "5"];
  const coordinates = {};

  letters.forEach((letter) => {
    numbers.forEach((number) => {
      const coordinate = letter + number;
      coordinates[coordinate] = false;
    });
  });

  return coordinates;
};

export { getRandomCoordinate, createCoordinatesObject };
