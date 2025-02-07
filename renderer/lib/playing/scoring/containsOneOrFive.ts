/**
 * Checks if the dice set contains at least one 1 or one 5.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @see GAME.md - Scoring
 *
 * @param {Set<number>} diceSet - The set of dice values rolled by the player.
 * @returns {boolean} Returns `true` if the dice set contains at least one 1 or 5, otherwise `false`.
 */
const containsOneOrFive = (diceSet: Set<number>): boolean => {
  if (diceSet.has(1) || diceSet.has(5)) {
    return true;
  }

  return false;
};

export default containsOneOrFive;
