import React from "react";
import "./HeaderScreen.css";

const HeaderScreen = () => {
  return (
    <div className="headerContainer">
      <h1 className="headerTitle">Conecta2</h1>
      <div className="headerCounterContainer">
        <h2 className="headerCounterTitleTeam1">Team 1: 0 points</h2>
        <h2 className="headerCounterTitleTeam2">Team 2: 0 points</h2>
      </div>
    </div>
  );
};

export default HeaderScreen;
