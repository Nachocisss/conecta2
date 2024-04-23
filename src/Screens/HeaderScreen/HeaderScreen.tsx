import React from "react";
import "./HeaderScreen.css";

const HeaderScreen = () => {
  const points = [0, 0];

  const teamScore = (team: number, points: number) => {
    return (
      <div className="headerCounterTeamContainer">
        <h2 className={`headerCounterTitleTeam${team}`}>
          Team {team}: {points} points
        </h2>
      </div>
    );
  };

  return (
    <div className="headerContainer">
      <h1 className="headerTitle">Conecta2</h1>
      <div className="headerCounterContainer">
        {points.map((item, index) => {
          return teamScore(index + 1, item);
        })}
      </div>
    </div>
  );
};

export default HeaderScreen;
