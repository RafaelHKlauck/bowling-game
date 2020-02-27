import { getScores } from "../GetScores";
import { getPlays } from "../GetPlays";

describe("bowling tests", () => {
  it("getPlays()", () => {
    expect(getPlays([], 7)).toEqual([[7]]);
    expect(getPlays([], 10)).toEqual([[10, 0]]);
    expect(getPlays([[4]], 1)).toEqual([[4, 1]]);
    expect(getPlays([[4, 2], [2]], 2)).toEqual([
      [4, 2],
      [2, 2]
    ]);

    expect(
      getPlays(
        [
          [4, 2],
          [2, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 6]
        ],
        2
      )
    ).toEqual([
      [4, 2],
      [2, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 6, 2]
    ]);
    expect(
      getPlays(
        [
          [4, 2],
          [2, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 2],
          [4, 4]
        ],
        2
      )
    ).toEqual([
      [4, 2],
      [2, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 2],
      [4, 4]
    ]);
  });

  it("getScores()", () => {
    expect(
      getScores([
        [4, 2],
        [2, 2]
      ])
    ).toEqual([[6, 10]]);
    expect(
      getScores([
        [4, 2],
        [2, 8]
      ])
    ).toEqual([[6, 16]]);
    expect(getScores([[4, 2], [2, 8], [5]])).toEqual([[6, 21, 26]]);
  });
});
// 💦💩💦 sibeannnnn 💦💩💦
