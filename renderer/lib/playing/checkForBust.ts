import isFullStraight from "./scoring/isFullStraight";
import isPartialStraight from "./scoring/isPartialStraight";
import containsOneOrFive from "./scoring/containsOneOrFive";
import isThreeOfAKind from "./scoring/isThreeOfAKind";

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
  const diceSet = new Set(dices);

  // Check for each scoring condition
  if (isFullStraight(diceSet)) return false;
  if (isPartialStraight(diceSet)) return false;
  if (isThreeOfAKind(diceSet)) return false;
  if (containsOneOrFive(diceSet)) return false;

  // The player is busted and cannot score
  return true;
};

export default checkForBust;
