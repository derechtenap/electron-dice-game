/**
 * Checks if the dice array contains at least one 1 or one 5.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @see GAME.md - Scoring
 *
 * @param {number[]} dices - The dice values rolled by the player.
 * @returns {boolean} Returns `true` if the dice array contains at least one 1 or 5, otherwise `false`.
 */
const containsOneOrFive = (dices: number[]): boolean =>
  dices.includes(1) || dices.includes(5);

export default containsOneOrFive;
