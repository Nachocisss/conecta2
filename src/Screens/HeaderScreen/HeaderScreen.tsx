import React from "react";
import "./HeaderScreen.css";
import { useCoordinate } from "../../Contexts/CoordinatesContext.tsx";

const HeaderScreen = () => {
  const points = [0, 0];
  const { scores, turn } = useCoordinate();
  console.log(scores);

  const teamScore = (team: number) => {
    return (
      <div className="headerCounterTeamContainer">
        <h2 className={`headerCounterTitleTeam${team}`}>
          Team {team}: {scores[`team${team}`]} points
        </h2>
        {turn + 1 === team && <div className="headerTurnText"></div>}
      </div>
    );
  };

  return (
    <div className="headerContainer">
      <h1 className="headerTitle">Conecta2</h1>
      <div className="headerCounterContainer">
        {points.map((item, index) => {
          return teamScore(index + 1);
        })}
      </div>
    </div>
  );
};

export default HeaderScreen;
