import {
  PARTIAL_STRAIGHT_ONE_TO_FIVE,
  PARTIAL_STRAIGHT_TWO_TO_SIX,
} from "@/utils/constants";

/**
 * Checks if the dice values contains a partial straight (either 1-5 or 2-6).
 *
 * @param {number[]} dices - An array of dice values rolled by the player.
 * @returns {boolean} Returns `true` if the array contains a partial straight, otherwise `false`.
 */
const isPartialStraight = (dices: number[]): boolean => {
  if (dices.length !== PARTIAL_STRAIGHT_ONE_TO_FIVE.length) {
    return false;
  }

  // Check if the sorted dice match either of the partial straight patterns
  return (
    dices.every((d, idx) => d === PARTIAL_STRAIGHT_ONE_TO_FIVE[idx]) ||
    dices.every((d, idx) => d === PARTIAL_STRAIGHT_TWO_TO_SIX[idx])
  );
};

export default isPartialStraight;
