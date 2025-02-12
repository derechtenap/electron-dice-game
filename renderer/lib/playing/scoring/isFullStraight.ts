import { FULL_STRAIGHT } from "@/utils/constants";

/**
 * Checks if the dice values contain a full straight.
 * A full straight requires the presence of each number from 1 to 6.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @see GAME.md - Scoring
 *
 * @param {number[]} dices - The dice values rolled by the player.
 * @returns {boolean} Returns `true` if the values contains a full straight (1-6), otherwise `false`.
 */
const isFullStraight = (dices: number[]): boolean => {
  if (dices.length !== FULL_STRAIGHT.length) {
    return false;
  }

  return (
    // If values match, so it's a full straight
    dices.every((d, idx) => d === FULL_STRAIGHT[idx])
  );
};

export default isFullStraight;
