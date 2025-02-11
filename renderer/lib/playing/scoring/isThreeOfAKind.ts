/**
 * Checks if the dice array contains three or more of a kind.
 * This occurs if any number appears three or more times in the array.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @see GAME.md - Scoring
 *
 * @param {number[]} dices - The dice values rolled by the player.
 * @returns {boolean} Returns `true` if the dice array contains three or more of a kind, otherwise `false`.
 */
const isThreeOfAKind = (dices: number[]): boolean => {
  return dices.some((die) => dices.filter((d) => d === die).length >= 3);
};

export default isThreeOfAKind;
