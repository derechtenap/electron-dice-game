import isFullStraight from "./isFullStraight";
import isPartialStraight from "./isPartialStraight";
import containsOneOrFive from "./containsOneOrFive";
import isThreeOfAKind from "./isThreeOfAKind";

/**
 * Determines whether the player is "busted" and cannot score in the current round.
 * A player is considered busted if none of the scoring conditions are met.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @see GAME.md - Scoring
 *
 * @param {number[]} dices - The array of dice values rolled by the player.
 * @returns {boolean} Returns `true` if the player is busted, otherwise `false`.
 */
const checkForBust = (dices: number[]): boolean => {
  // Sort the dices for later comparison with the partial and full straight
  dices.sort();

  // Check for each scoring condition
  if (isFullStraight(dices)) return false;
  if (isPartialStraight(dices)) return false;
  if (isThreeOfAKind(dices)) return false;
  if (containsOneOrFive(dices)) return false;

  // The player is busted and cannot score
  return true;
};

export default checkForBust;
