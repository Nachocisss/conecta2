import React, { createContext, useState, useContext } from "react";
import { createCoordinatesObject } from "../Utils/getRandomCoordinate.tsx";

const CoordinatesContext = createContext({
  coordinates: {},
  toggleCoordinates: (number) => {},
});

export const CoordinatesProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(createCoordinatesObject());

  const toggleCoordinates = (newCoord) => {
    setCoordinates((prevCoord) => ({
      ...prevCoord,
      [newCoord]: !prevCoord[newCoord],
    }));
  };

  return (
    <CoordinatesContext.Provider value={{ coordinates, toggleCoordinates }}>
      {children}
    </CoordinatesContext.Provider>
  );
};

export const useCoordinate = () => {
  return useContext(CoordinatesContext);
};
