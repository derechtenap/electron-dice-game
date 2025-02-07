import { INITIAL_NUMBER_OF_DICES } from "utils/constants";
import rollDice from "./rollDice";

/**
 * Generates an array of random dice values.
 *
 * @author Tim Deres <derechtenap>
 * @version 1.0
 *
 * @returns {number[]} An array where each element is a random dice value between 1 and 6.
 */
const getInitialDices = (): number[] => {
  return Array.from({ length: INITIAL_NUMBER_OF_DICES }, () => rollDice());
};

export default getInitialDices;
