import { FULL_STRAIGHT } from "utils/constants";

/**
 * Checks if the dice set contains a full straight.
 * A full straight requires the presence of each number from 1 to 6.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @see GAME.md - Scoring
 *
 * @param {Set<number>} diceSet - The set of dice values rolled by the player.
 * @returns {boolean} Returns `true` if the dice set contains a full straight (1-6), otherwise `false`.
 */
const isFullStraight = (diceSet: Set<number>): boolean => {
  return FULL_STRAIGHT.every((dice) => diceSet.has(dice));
};

export default isFullStraight;
