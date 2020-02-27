export const getRollInfo = roll => {
  if (roll.length === 1)
    return { isSpare: false, isStrike: false, finished: false };

  return {
    isSpare: roll[0] + roll[1] === 10,
    isStrike: roll[0] === 10,
    finished: true
  };
};
