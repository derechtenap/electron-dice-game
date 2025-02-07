/**
 * Checks if the dice set contains three or more of a kind.
 * This occurs if any number appears three or more times in the set.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @see GAME.md - Scoring
 *
 * @param {Set<number>} diceSet - The set of dice values rolled by the player.
 * @returns {boolean} Returns `true` if the dice set contains three or more of a kind, otherwise `false`.
 */
const isThreeOfAKind = (diceSet: Set<number>): boolean => {
  // Check if any dice value in the set occurs three or more times
  for (const dice of Array.from(diceSet)) {
    const count = Array.from(diceSet).filter((d) => d === dice).length;

    if (count >= 3) {
      // Found three or more of a kind
      return true;
    }
  }

  return false;
};

export default isThreeOfAKind;
