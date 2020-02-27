import React from "react";
import { getScores } from "./GetScores";
import { getRollInfo } from "./GetRollInfo";

export const ScoreBoard = ({ play, index, plays }) => {
  const renderHeader = () => {
    const rollInfo = getRollInfo(play);
    // Strike
    if (rollInfo.isStrike) {
      return (
        <div className="Card-Header">
          <div className="roll-box"></div>
          <div className="roll-box strike">{play[1]}</div>
          {play[2] ? <div className="roll-box border">{play[2]}</div> : null}
        </div>
      );
    }
    // Spare
    if (rollInfo.isSpare) {
      return (
        <div className="Card-Header">
          <div className="roll-box">{play[0]}</div>
          <div className="spare-flex">
            <div className="spare"></div>
          </div>
          {play[2] ? <div className="roll-box border">{play[2]}</div> : null}
        </div>
      );
    } //None
    return (
      <div className="Card-Header">
        <div className="roll-box">{play[0]}</div>
        <div className="roll-box border">{play[1]}</div>
        {play[2] ? <div className="roll-box border">{play[2]}</div> : null}
      </div>
    );
  };

  return (
    <div className="Card">
      {renderHeader()}
      <div className="Score">{getScores(plays)[index]}</div>
    </div>
  );
};
