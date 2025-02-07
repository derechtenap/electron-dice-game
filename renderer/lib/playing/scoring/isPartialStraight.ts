import {
  PARTIAL_STRAIGHT_ONE_TO_FIVE,
  PARTIAL_STRAIGHT_TWO_TO_SIX,
} from "utils/constants";

/**
 * Checks if the dice set contains a partial straight.
 * A partial straight can either be from 1-5 or 2-6.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @see GAME.md - Scoring
 *
 * @param {Set<number>} diceSet - The set of dice values rolled by the player.
 * @returns {boolean} Returns `true` if the dice set contains a partial straight (either 1-5 or 2-6), otherwise `false`.
 */
const isPartialStraight = (diceSet: Set<number>): boolean => {
  if (PARTIAL_STRAIGHT_ONE_TO_FIVE.every((dice) => diceSet.has(dice))) {
    return true;
  }

  if (PARTIAL_STRAIGHT_TWO_TO_SIX.every((dice) => diceSet.has(dice))) {
    return true;
  }

  return false;
};

export default isPartialStraight;
