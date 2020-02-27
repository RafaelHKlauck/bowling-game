import { getRollInfo } from "./GetRollInfo";

// cria um teste simulando isso
export const getPlays = (plays, pins) => {
  const currentRollIndex = plays.length - 1;
  const currentRoll = plays[currentRollIndex];
  const isLastRoll = currentRollIndex === 9;
  const isFirstRoll = plays.length === 0;
  // [[2, 6]] -> [[2, 6], [4]]
  if (isFirstRoll || (currentRoll.length === 2 && !isLastRoll)) {
    // FIRST ROLL
    const newRoll = pins === 10 ? [pins, 0] : [pins];
    //console.log("Primeiro caso", { pins, newRoll });
    return [...plays, newRoll];
  }

  // [[2]] -> [[2, 7]]
  if (currentRoll.length === 1) {
    //console.log("Segundo caso", pins);
    const newRoll = [currentRoll[0], pins];
    return plays.map((play, index) => {
      const isLastRoll = index === plays.length - 1;
      return isLastRoll ? newRoll : play;
    });
  }

  if (isLastRoll) {
    //console.log("LAST ROLL");
    const lastRoll = getRollInfo(currentRoll);
    if (lastRoll.isSpare || lastRoll.isStrike) {
      return plays.map((play, index) => {
        const isLastRoll = index === plays.length - 1;
        return isLastRoll ? [...currentRoll, pins] : play;
      });
    }

    return plays;
  }

  //console.log("AIAIAIAI");
};
