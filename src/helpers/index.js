/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - the word guessed by the user
 * @param {string} secretWord - the secret word we defined
 */

export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedWordSet = new Set(guessedWord.split(""));
  return [...secretLetterSet].filter((letter) => guessedWordSet.has(letter))
    .length;
}
