// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("ignores non-alphabetic characters", () => {
    const word = "t3$t!";
    const points = pointsForWord(word);
    // t(2) + $(ignore) + t(2) = 4
    expect(points).toBe(4);
  });

  it("returns 0 if input is not a string", () => {
    const points = pointsForWord(123);
    expect(points).toBe(0);
  });
});
