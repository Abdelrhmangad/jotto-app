import { getLetterMatchCount } from "./index";

describe("getLettterMatchCount", () => {
  const secretWord = "party";
  test("should return the correct count when no matched Letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test("should return correct count when there are 3 matching letters ", () => {
    const letterMatchCount = getLetterMatchCount("port", secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test("should return correct count when there is dublicate letters at the guessed word", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
