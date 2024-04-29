import React from "react";
import "./Board.css";
import CoordinatesCell from "../Cells/CoordinatesCells/CoordinatesCell.tsx/CoordinatesCell.tsx";
import WordCell from "../Cells/WordCell/WordCell.tsx";

const letters = ["A", "B", "C", "D", "E"];
const dummyCell = <CoordinatesCell tag={""} isDummy={true} />;
const dummyWordCell = <WordCell word={""} isDummy={true} />;

const firstRowCreator = (Component) => {
  const row = [dummyCell];
  for (let i = 1; i < 6; i++) {
    const tag = i;
    row.push(<Component tag={tag} />);
  }
  return <div className="boardRow">{row}</div>;
};

const wordRowCreator = (words) => {
  const row = [dummyWordCell];
  for (let i = 0; i < 5; i++) {
    row.push(<WordCell word={words[i]} />);
  }
  return <div className="boardRow">{row}</div>;
};

const rowCreator = (Component, rowNumber, words) => {
  const row = [<></>];
  for (let i = 1; i < 6; i++) {
    const tag = letters[rowNumber] + i;
    row.push(<Component tag={tag} />);
  }
  return (
    <div className="boardRow">
      <>
        <CoordinatesCell tag={letters[rowNumber]} />
        <WordCell word={words[rowNumber + 5]} rotate />
      </>
      {row}
    </div>
  );
};
export { firstRowCreator, wordRowCreator, rowCreator };
