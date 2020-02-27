const getStrikeBonus = nextPlay => {
  if (!nextPlay) return 0;

  const firstRoll = nextPlay[0];
  const secondRoll = nextPlay[1] || 0;

  return firstRoll + secondRoll;
};

const getSpareBonus = nextPlay => {
  if (!nextPlay) return 0;
  return nextPlay[0];
};

export const getScores = allPlays => {
  const resultEachRoll = allPlays.map((allRolls, index) => {
    const firstRoll = allRolls[0];
    const secondRoll = allRolls[1] === undefined ? 0 : allRolls[1];
    let nextPlay = allPlays[index + 1];
    const bonusPlay = allRolls[2];

    if (index === 9 && allPlays[9].length === 3) {
      if (firstRoll === 10) {
        return firstRoll + bonusPlay;
      } else if (firstRoll + secondRoll === 10) {
        return firstRoll + secondRoll + bonusPlay;
      } else {
        return bonusPlay;
      }
    } else {
      if (firstRoll === 10) {
        const bonus = getStrikeBonus(nextPlay);
        return firstRoll + bonus;
      } else if (firstRoll + secondRoll === 10) {
        const bonus = getSpareBonus(nextPlay);
        return firstRoll + secondRoll + bonus;
      } else {
        return firstRoll + secondRoll;
      }
    }
  });

  let addingResult = 0;
  const result = resultEachRoll.map(x => {
    return (addingResult = addingResult + x);
  });

  // RETORNA RESULT
  return result;
  // return result[result.length - 1];
};
